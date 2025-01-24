(ns blog.pages.Posts.Fuctional.post1
  (:require [reagent.core :as r]
            [blog.components.template-post :refer [template-post]]))

(defn navigate-back []
  (js/alert "Navegar a la pagina anterior"))

(defn post1 []
  [:div {:style {:display "flex"
                 :justify-content "center"
                 :align-items "center"
                 :height "100vh"
                 :width "100vw"}}
   [:div {:style {:width "100%"
                  :max-width "1024px"
                  :background "#1a1a1a"
                  :box-shadow "0 4px 6px rgba(0, 0, 0, 0.1)"
                  :border-radius "8px"
                  :padding "3rem"}}
    [template-post "Introduccion a la Programacion Funcional"
                   "La programacion funcional es un paradigma de programacion que trata el calculo como la evaluacion de funciones matematicas y evita el estado mutable y los efectos secundarios."
                   navigate-back
                   :description "En este articulo aprenderas los fundamentos de la programacion funcional y sus aplicaciones practicas en el desarrollo de software."
                   :tags ["Programacion Funcional" "Clojure" "Paradigmas"]
                   :related-links ["https://clojure.org" "https://en.wikipedia.org/wiki/Functional_programming"]]]])

