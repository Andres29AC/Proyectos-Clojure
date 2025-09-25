(ns hospital.modules.patients.application.repositories.patient-repository)

(defprotocol PatientRepository
  (save [this patient])
  (find-by-id [this id])
  (find-all [this])
  (delete [this id]))
