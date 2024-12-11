(ns blog.components.header
  (:require [reagent.core :as r]))

(defn header []
  [:header
   [:h1 "Mi Blog"]
   [:nav
    [:ul
     [:li [:a {:href "#"} "Inicio"]]
     [:li [:a {:href "#"} "Sobre mí"]]
     [:li [:a {:href "#"} "Contacto"]]]]])
