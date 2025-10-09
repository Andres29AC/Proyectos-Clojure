(ns hospital.core.server
  (:require
   [ring.adapter.jetty :as jetty]
   [integrant.core :as ig]
   [hospital.modules.patients.presentation.routes.patient-route :as patient-routes]
   [hospital.modules.patients.infrastructure.repositories.postgres-patient-repository :as postgres-repo]
   [clojure.java.io :as io]
   [hospital.shared.db]
   [ring.middleware.json :refer [wrap-json-body wrap-json-response]]))

(comment #NOTE - 
  ig/init-key = cuando Integrant ve :app/handler en la config, llama a esta función.
  Recibe repo (repositorio de pacientes).
  Crea las rutas de pacientes y las envuelve en middlewares JSON.
)
(defmethod ig/init-key :app/handler
  [_ {:keys [repo]}]
  ;; Middlewares que parsean JSON y devuelven JSON
  (-> (patient-routes/routes repo)
      ;; 👇 aquí la corrección: keywords? true
      (wrap-json-body {:keywords? true :bigdecimals? true})
      (wrap-json-response)))

(comment #NOTE -
  Cuando Integrant ve :jetty/server, ejecuta esto.
  ✅ Recibe:
    port → puerto (ej. 3000)
    handler → el handler que definimos antes
    join? → si el servidor bloquea el hilo o no (útil en dev/prod)
  ✅ Llama a run-jetty → inicia el servidor HTTP
)
(defmethod ig/init-key :jetty/server
  [_ {:keys [port handler join?]}]
  (println "Starting Jetty on port" port)
  (jetty/run-jetty handler {:port port :join? join?}))

(comment #NOTE -
  Cuando el sistema se apaga, Integrant llama a halt-key!.
  ✅ Detiene Jetty correctamente.
)
(defmethod ig/halt-key! :jetty/server
  [_ server]
  (.stop server))

(comment #NOTE -
  ✅ Carga config.edn
  ✅ Parse a datos de Clojure
  ✅ ig/init → crea todos los componentes en orden (DB, repo, handler, server, etc.)
  Este archivo es el “inicio” de la app.
)
(defn -main []
  (let [config (-> "config.edn" io/resource slurp ig/read-string)]
    (ig/init config)))

