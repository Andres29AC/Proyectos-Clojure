(ns hospital.modules.patients.domain.events.patient-registered)

(defrecord PatientRegistered [patient-id occurred-at])

(defn new-patient-registered [patient-id]
  (->PatientRegistered patient-id (java.time.LocalDateTime/now)))
