(ns hospital.modules.patients.presentation.routes.patient-route
  (:require [reitit.ring :as ring]
            [hospital.modules.patients.presentation.handlers.patient-handler :as ph]))

(defn routes [repo]
  (ring/ring-handler
   (ring/router
    [["/api"
      ["/patients"
       {:get (ph/list-patients repo)
        :post (ph/register-patient repo)}]
      ["/patients/:id"
       {:get (ph/get-patient repo)
        :delete (ph/delete-patient repo)}]]])))