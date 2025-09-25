(ns hospital.modules.patients.domain.entities.patient
  (:require [hospital.modules.patients.domain.value-objects.email :as email]
            [hospital.modules.patients.domain.value-objects.document-number :as doc]
            [hospital.modules.patients.domain.enums.type-document :as td]
            [hospital.modules.patients.domain.enums.type-gender :as tg]
            [hospital.modules.patients.domain.enums.type-marital-status :as ms]
            [hospital.modules.patients.domain.enums.type-blood :as bt]
            [hospital.modules.patients.domain.enums.type-status :as st]))

(defrecord Patient
  [id type-document document-number first-name last-name birth-date type-gender
   marital-status address phone email blood-type allergies medical-history
   created-at created-by status])

(defn new-patient
  [{:keys [id type-document document-number first-name last-name birth-date type-gender
           marital-status address phone email blood-type allergies medical-history
           created-at created-by status]}]
  (->Patient id
             type-document
             (doc/create document-number)
             first-name
             last-name
             birth-date
             type-gender
             marital-status
             address
             phone
             (email/create email)
             blood-type
             allergies
             medical-history
             created-at
             created-by
             status))

(defn calculate-age [patient]
  (- (.. (java.time.LocalDate/now) getYear)
     (.. (:birth-date patient) getYear)))
