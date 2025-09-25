(ns hospital.core.server
  (:require
    [reitit.ring :as ring]
    [ring.adapter.jetty :as jetty]
    [integrant.core :as ig]
    [clojure.edn :as edn]
    [clojure.java.io :as io]
    [hospital.shared.db]))

;; Definimos el handler como un componente de Integrant
(defmethod ig/init-key :app/handler
  [_ _]
  (ring/ring-handler
    (ring/router
      [["/ping" {:get (fn [_] {:status 200 :body "pong"})}]
       ["/patients" {:get (fn [_] {:status 200 :body "List patients"})}]])))

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
