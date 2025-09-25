(ns hospital.modules.patients.infrastructure.repositories.postgres-patient-repository
  (:require [next.jdbc.sql :as sql]
            [hospital.modules.patients.application.repositories.patient-repository :as repo]))

(defrecord PostgresPatientRepository [datasource]
  repo/PatientRepository
  (save [this patient]
    (sql/insert! datasource :patients patient)
    patient)
  (find-by-id [this id]
    (sql/get-by-id datasource :patients id)))
