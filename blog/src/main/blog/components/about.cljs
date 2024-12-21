(ns blog.components.about
  (:require [blog.utils.lottie-file :as lottie]))

(defn about-page []
  [:div
   [:h1 "Acerca de"]
   [lottie/insertar-lottie]])


;;https://widdindustries.com/blog/archive.html