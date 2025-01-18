(ns blog.core
  (:require [reagent.core :as r]
            [blog.components.header :refer [header]]
            [blog.components.tags :refer [tags-component]]
            [blog.components.about :refer [about-page]]
            [blog.components.footer :refer [footer]]
            [reagent.dom :as dom]))

(defn app []
  [:div
   [header] 
   [tags-component]
   [:main
    [about-page]]
   [footer]])

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
