(ns hospital.modules.patients.infrastructure.repositories.postgres-patient-repository
  (:require [hospital.modules.patients.application.repositories.patient-repository :as repo]
            [hospital.modules.patients.domain.entities.patient :as patient]
            [next.jdbc.sql :as sql]
            [next.jdbc.result-set :as rs]
            [integrant.core :as ig]
            [clojure.string :as str])
  (:import [java.sql Date Timestamp]
           [java.time LocalDate]
           [java.util UUID]))
(comment #NOTE - 
  Clojure usa kebab-case -> first-name
  Postgres usa snake_case -> first_name
)
;; --- Helpers ---
(defn kebab->snake [k]
  (if (keyword? k)
    (-> k name (str/replace "-" "_") keyword)
    k))

(defn snake->kebab [k]
  (if (keyword? k)
    (-> k name (str/replace "_" "-") keyword)
    k))

(defn ->snake-case [m]
  (into {}
        (map (fn [[k v]]
               [(kebab->snake k)
                (cond
                  (map? v) (->snake-case v)
                  (= k :birth-date) (Date/valueOf (LocalDate/parse (str v)))
                  (keyword? v) (name v)
                  :else v)]))
        m))

(defn ->kebab-case [row]
  (when (map? row)
    (into {}
          (map (fn [[k v]] [(snake->kebab k) v]))
          row)))

;; --- Mapeo DB -> Entidad ---
(defn ->map-patient [row]
  (when row
    (let [row-kebab (->kebab-case row)]
      (patient/new-patient
        (assoc row-kebab
               :id (some-> (:id row-kebab) str)
               :created-at (some-> (:created-at row-kebab) str)
               :status (or (:status row-kebab) "active"))))))

;; --- Repositorio ---
(defrecord PostgresPatientRepository [ds]
  repo/PatientRepository
  (comment #NOTE - 
    Quita campos que DB genera automáticamente (id, created-at, created-by)
    Convierte a snake_case con formato adecuado (fechas, enums, etc.)
    Inserta en postgres con SQL puro
    RETURNING * para obtener el registro insertado
    Lo convierte de vuelta a entidad con ->map-patient
  )
  (save [this patient]
    (let [data (-> patient
                   (dissoc :id :created-at :created-by)
                   (assoc :status (or (when (:status patient)
                                         (if (keyword? (:status patient))
                                           (name (:status patient))
                                           (:status patient)))
                                     "active"))
                   ->snake-case)
          result (first
                  (sql/query ds
                             ["INSERT INTO patients (type_document, document_number, first_name, last_name, birth_date, type_gender, marital_status, address, phone, email, blood_type, allergies, medical_history, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING *"
                              (:type_document data)
                              (:document_number data)
                              (:first_name data)
                              (:last_name data)
                              (:birth_date data)
                              (:type_gender data)
                              (:marital_status data)
                              (:address data)
                              (:phone data)
                              (:email data)
                              (:blood_type data)
                              (:allergies data)
                              (:medical_history data)
                              (:status data)]
                             {:builder-fn rs/as-unqualified-lower-maps}))]
      (->map-patient result)))
  (comment #NOTE - 
    Convierte id a UUID
    Usa next.jdbc para traer la fila por id
    Convierte la fila a entidad con ->map-patient
  )
  (find-by-id [this id]
    (let [uuid-id (UUID/fromString (str id))
          row (sql/get-by-id ds :patients uuid-id {:builder-fn rs/as-unqualified-lower-maps})]
      (->map-patient row)))

  (find-all [this]
    (map ->map-patient
         (sql/query ds ["SELECT * FROM patients"] {:builder-fn rs/as-unqualified-lower-maps})))

  (delete [this id]
    (let [uuid-id (UUID/fromString (str id))]
      (sql/delete! ds :patients {:id uuid-id}))))

;; --- Constructor ---
(defn new-repo [ds]
  (->PostgresPatientRepository ds))

;; --- Integrant hooks ---
(comment #NOTE - 
  Inyeccion de dependencias
  Integrant crea un repositorio automaticamente al iniciar la app
  y lo cierra al apagarla
)
(defmethod ig/init-key :hospital/patient-repository
  [_ {:keys [ds]}]
  (new-repo ds))

(defmethod ig/halt-key! :hospital/patient-repository
  [_ repo]
  (println "Shutting down patient repository")
  nil)


;;NOTE: Gosu
;; {  
;;   "type_document": "dni",
;;   "document_number": "12345678",
;;   "first_name": "Juan",
;;   "last_name": "Perez",
;;   "birth_date": "1990-01-01",
;;   "type_gender": "male",
;;   "marital_status": "single",
;;   "address": "Av. Lima 123",
;;   "phone": "999999999",
;;   "email": "juan.perez@example.com",
;;   "blood_type": "o-positive",
;;   "allergies": "ninguna",
;;   "medical_history": "sano",
;;   "status": "active"
;; }
