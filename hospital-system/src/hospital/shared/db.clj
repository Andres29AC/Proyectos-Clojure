(ns hospital.shared.db
  (:require
    [integrant.core :as ig]
    [next.jdbc :as jdbc]))

(defmethod ig/init-key :db/connection
  [_ {:keys [dbtype dbname user password host port]}]
  (println "Iniciando conexión a PostgreSQL en" host ":" port)
  (jdbc/get-datasource {:dbtype dbtype
                        :dbname dbname
                        :user user
                        :password password
                        :host host
                        :port port}))

(defmethod ig/halt-key! :db/connection
  [_ datasource]
  (println "Cerrando conexión a la base de datos")
  ;; next.jdbc usa DataSource, normalmente no necesitas cerrarla
  )
