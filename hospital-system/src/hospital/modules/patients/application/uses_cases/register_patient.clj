(ns hospital.modules.patients.application.usecases.register-patient
  (:require [hospital.modules.patients.application.services.patient-service :as service]))

(defn execute [repo patient-data]
  (service/register-patient repo patient-data))
