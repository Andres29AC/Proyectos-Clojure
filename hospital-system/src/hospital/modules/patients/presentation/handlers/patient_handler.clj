(ns hospital.modules.patients.presentation.handlers.patient-handler
  (:require [hospital.modules.patients.application.uses-cases.register-patient :as register]
            [hospital.modules.patients.application.services.patient-service :as service]
            [hospital.modules.patients.domain.enums.type-document :as td]
            [hospital.modules.patients.domain.enums.type-gender :as tg]
            [hospital.modules.patients.domain.enums.marital-status :as ms]
            [hospital.modules.patients.domain.enums.type-blood :as tb]
            [hospital.modules.patients.domain.enums.type-status :as ts]
            [ring.util.response :as response]
            [clojure.string :as str]
            [clojure.walk :as walk]))

;; --- Utils ---
(defn snake->kebab [s]
  (-> s (str/replace "_" "-") keyword))

(def enum-map
  {:type-document  td/TypeDocument
   :type-gender    tg/TypeGender
   :marital-status ms/MaritalStatus
   :blood-type     tb/TypeBlood
   :status         ts/TypeStatus})

(defn normalize-enum [field val]
  (if-let [enum (get enum-map field)]
    (cond
      (nil? val) (first (keys enum)) ; valor por defecto
      (keyword? val) (if (contains? enum val) val (keyword val))
      (string? val)  (or (when (contains? enum (keyword val)) (keyword val))
                         (some (fn [[k v]] (when (= (str/lower-case v) (str/lower-case val)) k)) enum)
                         (keyword val))
      :else val)
    val))

(defn normalize-patient-data [raw]
  (let [raw* (walk/keywordize-keys raw)]
    (into {} (map (fn [[k v]]
                    (let [k* (snake->kebab (name k))]
                      [k* (normalize-enum k* v)]))
                  raw*))))

;; --- Validación ---
(def required-fields
  [:type-document :document-number :first-name :last-name :birth-date :type-gender])

(defn validate-patient-data [data]
  (let [missing (filter #(nil? (get data %)) required-fields)]
    (if (seq missing)
      {:error (str "Missing required fields: " missing)}
      nil)))

;; --- Handler corregido ---
(defn register-patient [repo]
  (fn [req]
    (prn ">>> FULL REQ:" (select-keys req [:headers :body :body-params :params]))
    (let [body (:body req)]   ;; <--- Cambiado de :body-params a :body
      (if (nil? body)
        (-> (response/response {:error "No JSON body received"})
            (response/status 400))
        (let [patient-data (normalize-patient-data body)
              validation-error (validate-patient-data patient-data)]
          (if validation-error
            (-> (response/response validation-error)
                (response/status 400))
            (let [patient (register/execute repo patient-data)]
              (-> (response/response patient)
                  (response/status 201)))))))))

(defn get-patient [repo]
  (fn [req]
    (let [id (get-in req [:path-params :id])
          patient (service/get-patient repo id)]
      (if patient
        (response/response patient)
        (-> (response/response {:error "Not found"})
            (response/status 404))))))

(defn list-patients [repo]
  (fn [_]
    (response/response (service/list-patients repo))))

(defn delete-patient [repo]
  (fn [req]
    (let [id (get-in req [:path-params :id])]
      (service/delete-patient repo id)
      (-> (response/response nil)
          (response/status 204)))))
