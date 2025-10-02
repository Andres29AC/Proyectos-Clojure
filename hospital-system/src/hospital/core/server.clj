(ns hospital.core.server
  (:require
   [ring.adapter.jetty :as jetty]
   [integrant.core :as ig]
   [hospital.modules.patients.presentation.routes.patient-route :as patient-routes]
   [hospital.modules.patients.infrastructure.repositories.postgres-patient-repository :as postgres-repo]
   [clojure.java.io :as io]
   [hospital.shared.db]
   [ring.middleware.json :refer [wrap-json-body wrap-json-response]]))

(defmethod ig/init-key :app/handler
  [_ {:keys [repo]}]
  ;; Middlewares que parsean JSON y devuelven JSON
  (-> (patient-routes/routes repo)
      ;; 👇 aquí la corrección: keywords? true
      (wrap-json-body {:keywords? true :bigdecimals? true})
      (wrap-json-response)))

(defmethod ig/init-key :jetty/server
  [_ {:keys [port handler join?]}]
  (println "Starting Jetty on port" port)
  (jetty/run-jetty handler {:port port :join? join?}))

(defmethod ig/halt-key! :jetty/server
  [_ server]
  (.stop server))

(defn -main []
  (let [config (-> "config.edn" io/resource slurp ig/read-string)]
    (ig/init config)))


(comment
  (println "integrant.core → para manejar configuración y el ciclo de vida de tus componentes.")
  (println "ring.adapter.jetty → para levantar un servidor Jetty (contenedor web embebido en Java).")
  (println "reitit.ring → para definir rutas y manejar peticiones HTTP.")
  (defn prueba [] "Teoria"))
