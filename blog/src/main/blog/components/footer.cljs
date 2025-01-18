;; (ns blog.components.footer
;;   (:require [reagent.core :as r]))

;; (defn footer []
;;   [:footer {:class "bg-neutral-900 text-gray-400 py-6 shadow-lg"}
;;    [:div {:class "container mx-auto flex justify-around items-center"}
;;     [:p {:class "text-sm"} "© 2025 CoderLion. All rights reserved."]

;;     ]])
(ns blog.components.footer
  (:require [reagent.core :as r]))


(defn footer []
  [:footer {:class "bg-neutral-900 text-gray-400 py-6"}
   [:div {:class "container mx-auto flex flex-col items-center space-y-4"}

    [:h1 {:class "text-2xl font-semibold text-white"} "CoderLion"]


    [:p {:class "text-center max-w-md"}
     "CoderLion is a blog where you will find excellent tutorials on web development (ASMR), examples with Clojure, Elixir, Rust, mobile development and much more. Each tutorial is presented in detail, step by step, with the necessary source code."]


    ;; [:div {:class "flex space-x-4"}
    ;;  (for [icon ["facebook" "twitter" "google" "youtube" "linkedin"]]
    ;;    [:a {:href (str "#" icon) :class "hover:text-white"}
    ;;     [:i {:class (str "fab fa-" icon)}]])]

    ;; [:nav {:class "flex space-x-6 text-sm"}
    ;;  [:a {:href "#home" :class "hover:text-white"} "Home"]
    ;;  [:a {:href "#about" :class "hover:text-white"} "About"]
    ;;  [:a {:href "#contact" :class "hover:text-white"} "Contact"]
    ;;  [:a {:href "#blog" :class "hover:text-white"} "Blog"]]

    ;; Derechos reservados
    [:p {:class "text-xs"}
     "Copyright © 2025 "
     [:a {:href "#foolishdeveloper" :class "hover:text-white"} "Foolishdeveloper"]]]])
