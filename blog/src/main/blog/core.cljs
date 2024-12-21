(ns blog.core
  (:require [reagent.core :as r]
            [blog.components.header :refer [header]]
            [blog.components.tags :refer [tags-component]]
            [reagent.dom :as dom]))

(defn app []
  [:div
   [header] 
   [tags-component]
   [:main
    [:p "Bienvenido a mi blog."]]])

(defn init []
  (dom/render [app]
            (.getElementById js/document "app")))
;; https://widdindustries.com/blog/index.html
;; https://simpleicons.org/
;; https://www.reshot.com/free-svg-icons/
;; https://svgl.app/
;; https://freesets.dev/tools
;; https://devresourc.es/
;; https://undraw.co/search/dev