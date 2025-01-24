(ns blog.core
  (:require [reagent.dom :as dom]
            [re-frame.core :as re-frame]
            [blog.db]
            [blog.router :as router]
            [blog.components.header :refer [header]]
            [blog.components.tags :refer [tags-component]]
            [blog.components.about :refer [about-page]]
            [blog.pages.Archives.archives :refer [archive-page]]
            [blog.components.footer :refer [footer]]))

(defn app []
  (let [active-page @(re-frame/subscribe [:active-page])
        selected-tag @(re-frame/subscribe [:selected-tag])]
    [:div {:class "app-container"}
     [header]
     [:main
      (case active-page
        :tags [tags-component]
        :archives [archive-page selected-tag]
        [:div "Pagina no encontrada, verifica la URL."])]
     (when (not= active-page :archives) 
       [about-page])  
     (when (not= active-page :archives) 
       [footer])  
     ]))

(defn init []
  (re-frame/dispatch-sync [:initialize-db])
  (router/start!)
  (dom/render [app]
              (.getElementById js/document "app")))

