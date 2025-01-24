(ns blog.pages.Posts.Fuctional.post2
  (:require [blog.services.post :as post]))

(defn post2 []
  (let [post (first (filter #(= (:url %) "/Posts/Functional/post2") post/posts))]
    (if post
      [:div
       [:h1 (:name post)] ;; Muestra el nombre del post
       [:p "Tag: " (:tag post)] ;; Muestra el tag del post
       [:p "Este es el contenido especifico del post."]]
      [:div "Post no encontrado."]))) ;; Mensaje de error si no se encuentra el post
