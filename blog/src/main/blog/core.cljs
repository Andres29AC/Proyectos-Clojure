(ns blog.core
  (:require [reagent.core :as r]
            [blog.components.header :refer [header]]
            [reagent.dom :as dom]))

(defn app []
  [:div
   [header]
   [:main
    [:p "Bienvenido a mi blog."]]])

(defn init []
  (dom/render [app]
            (.getElementById js/document "app")))
