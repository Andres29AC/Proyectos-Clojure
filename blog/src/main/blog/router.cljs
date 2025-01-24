(ns blog.router
  (:require
    [bidi.bidi :as bidi]
    [pushy.core :as pushy]
    [re-frame.core :as re-frame]))

;;TODO: Define las rutas
(def routes
  ["/" {"tags" :tags
        "archives" :archives}])

;;TODO: Convierte la URL en una ruta valida
(defn parse-url [url]
  (bidi/match-route routes url))

;;TODO: Despacha el evento para actualizar la pagina activa
(defn dispatch [matched-route]
  (let [view (:handler matched-route)
        query-params (:query-params matched-route)]
    (re-frame/dispatch [:set-active-page view])
    (when (= view :archives)
      (re-frame/dispatch [:set-selected-tag (:tag query-params)]))))

(defn start! []
  (pushy/start! (pushy/pushy dispatch parse-url)))

