(ns web-example.views
  (:require
   [re-frame.core :as re-frame]
   [web-example.events :as events]
   [web-example.subs :as subs]))

(defn display-user [{:keys [id avatar email] first-name :first_name}]
  [:div.horizontal.animate__animated.animate__rotateIn {:key id} 
   [:div.editar
    [:img.pr-15 {:src avatar}]
    [:h2 first-name]
    [:p.estilo (str "(" email ")")]]
    ])  

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        loading (re-frame/subscribe [::subs/loading])
        users (re-frame/subscribe [::subs/users])]
    [:div
     [:h1.coder.animate__animated.animate__wobble 
      "Hola a todos " @name] 
     (when @loading "loading...")
     (map display-user @users)
     [:button.centrar {:on-click #(re-frame/dispatch[::events/fetch-users])}"Generar datos a partir de la API"]
     [:button.centrar {:on-click #(re-frame/dispatch[::events/update-name "mi nombre es Andre AC"])}"Toca aqui!!⚡"]
     [:div.color
      [:a.enlace {:href "https://reqres.in/"} "Ir a Reqres.in"] 
      ]
     [:div.repo
      [:a.repositorio {:href "https://github.com/Andres29AC"} "Ir a Repositorio"]
      ]
     ])) 

;[re-frame.core :as re-frame] sirve para importar el namespace re-frame.core
;[web-example.subs :as subs] sirve para importar el namespace web-example.subs
;[web-example.events :as events] 
;web-example.events es el namespace que 
;contiene los eventos que se van a disparar