(ns hospital.modules.patients.infrastructure.repositories.postgres-patient-repository
  (:require [hospital.modules.patients.application.repositories.patient-repository :as repo]
            [hospital.modules.patients.domain.entities.patient :as patient]
            [next.jdbc.sql :as sql]
            [integrant.core :as ig]
            [clojure.string :as str])
  (:import [java.util UUID]
           [java.sql Date]
           [java.time LocalDate]))  ;; importamos LocalDate para parsear

;; --- Helpers ---
(defn kebab->snake [k]
  (-> k name (str/replace "-" "_") keyword))

(defn snake->kebab [k]
  (-> k name (str/replace "_" "-") keyword))

(defn ->snake-case [m]
  (into {}
        (map (fn [[k v]]
               (let [v (cond
                         ;; keywords a string
                         (keyword? v) (name v)
                         ;; birth-date string a java.sql.Date
                         (= k :birth-date) (Date/valueOf (LocalDate/parse v))
                         :else v)]
                 [(kebab->snake k) v])))
        m))

(defn ->kebab-case [m]
  (into {}
        (map (fn [[k v]] [(snake->kebab k) v]))
        m))

;; --- Mapeo DB -> Entidad ---
(defn ->map-patient [row]
  (patient/new-patient (->kebab-case row)))

;; --- Repositorio ---
(defrecord PostgresPatientRepository [ds]
  repo/PatientRepository

  (save [this patient]
    (let [data (-> patient
                   (into {:id (or (:id patient) (UUID/randomUUID))})
                   ->snake-case)]
      (sql/insert! ds :patients data)
      patient))

  (find-by-id [this id]
    (some-> (sql/get-by-id ds :patients id)
            ->map-patient))

  (find-all [this]
    (map ->map-patient (sql/query ds ["SELECT * FROM patients"])))

  (delete [this id]
    (sql/delete! ds :patients {:id id})))

;; --- Constructor puro ---
(defn new-repo [ds]
  (->PostgresPatientRepository ds))

;; --- Integrant hooks ---
(defmethod ig/init-key :hospital/patient-repository
  [_ {:keys [ds]}]
  (new-repo ds))

(defmethod ig/halt-key! :hospital/patient-repository
  [_ repo]
  (println "Shutting down patient repository")
  nil)
