(ns hospital.modules.patients.application.services.patient-service
  (:require [hospital.modules.patients.application.repositories.patient-repository :as repo]
            [hospital.modules.patients.domain.entities.patient :as patient]
            [hospital.modules.patients.domain.events.patient-registered :as evt]))

(defn register-patient [repo patient-data]
  (let [p (patient/new-patient patient-data)]
    (repo/save repo p)
    (evt/new-patient-registered (:id p))
    p))

(defn get-patient [repo id]
  (repo/find-by-id repo id))

(defn list-patients [repo]
  (repo/find-all repo))
(defn delete-patient [repo id]
  (repo/delete repo id))