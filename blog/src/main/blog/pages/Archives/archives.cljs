
;;TODO: Version para imprimir por consola
;; (ns blog.pages.Archives.archives
;;   (:require [blog.services.tag :refer [tag-posts update-tags]]
;;             [blog.services.post :refer [posts]]
;;             [blog.pages.Posts.Fuctional.post1 :refer [post1]]))

;; (defn post-component [post index tag-index]
;;   (let [{:keys [name url]} post]
;;     [:div {:class "post-item"}
;;      ;; Si es el primer post del quinto tag (index = 0, tag-index = 5):
;;      (if (and (= index 0) (= tag-index 5))
;;        [:a {:href "#" :class "text-blue-600 dark:text-blue-400 hover:underline"
;;             :on-click #(js/console.log "Renderizando pagina post1.cljs")}
;;         name]
;;        ;; Caso normal: Usar el URL definido en el post
;;        [:a {:href url :class "text-blue-600 dark:text-blue-400 hover:underline"} name])]))

;; (defn tag-component [tag posts tag-index]
;;   (println "Tag" tag-index ":" (:name tag)) ;; Imprime la posicion y nombre del tag
;;   [:div {:class "tag-container"}
;;    [:h2 {:class "text-lg font-semibold"} (str "Tag: " (:name tag))]
;;    [:p {:class "text-sm text-gray-600"} (str "Number of posts: " (:post-count tag))]
;;    (when (seq posts)
;;      (doseq [[post-index post] (map-indexed vector posts)]
;;        (println "  Post" post-index ":" (:name post))) ;; Imprime los posts de ese tag
;;      (for [[post-index post] (map-indexed vector posts)]
;;        ^{:key (:name post)}
;;        [post-component post post-index tag-index]))])

;; (defn archive-page []
;;   (let [tags (update-tags)]
;;     [:div {:class "archive-container"}
;;      (do
;;        (doseq [[index tag] (map-indexed vector tags)]
;;          (let [posts (tag-posts (:name tag))]
;;            (doseq [[post-index post] (map-indexed vector posts)]
;;              (println "  Post" post-index ":" (:name post)))))
;;        (for [[index tag] (map-indexed vector tags)]
;;          ^{:key (:name tag)}
;;          (let [posts (tag-posts (:name tag))]
;;            [tag-component tag posts index])))]))


;;TODO: Version -> Passed

(ns blog.pages.Archives.archives
  (:require [reagent.core :as r]
            [blog.services.tag :refer [tag-posts update-tags]]
            [blog.pages.Posts.Fuctional.post1 :refer [post1]]))

(defonce current-component (r/atom nil))

(defn post-component [post index tag-index]
  (let [{:keys [name url]} post]
    [:div {:class "p-2"}
     (if (and (= index 0) (= tag-index 5))
       [:a {:href "#"
            :class "text-blue-500 dark:text-blue-400 hover:underline"
            :on-click #(reset! current-component post1)}
        name]
       [:a {:href url :class "text-blue-500 dark:text-blue-400 hover:underline"} name])]))

(defn tag-component [tag tag-index]
  (let [posts (tag-posts (:name tag))]
    [:div {:class "bg-gray-900 shadow-lg rounded-lg p-4 relative"}  
     [:div {:class "absolute top-2 right-2 p-1 bg-gray-800 rounded-full"} 
      [:img {:src "assets/svg/programmer2.svg" :alt "icono" :class "w-10 h-10"}]] 
     [:div {:class "flex items-center mb-4"}
      [:div {:class "flex-shrink-0 bg-blue-500 text-white rounded-full p-2"}
       [:svg {:xmlns "http://www.w3.org/2000/svg"
              :fill "none"
              :viewBox "0 0 24 24"
              :stroke-width "2"
              :stroke "currentColor"
              :class "w-6 h-6"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M12 4.5l7.5 7.5-7.5 7.5m-6-7.5h12"}]]]
      [:h2 {:class "text-lg font-semibold text-white ml-4"} (:name tag)]]
     [:p {:class "text-sm text-gray-400 mb-2"} (str "Number of posts: " (:post-count tag))]
     (for [[post-index post] (map-indexed vector posts)]
       ^{:key (:name post)}
       [post-component post post-index tag-index])]))

(defn archive-page []
  (let [tags (update-tags)]
    [:div {:class "p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
     (if-not @current-component
       (for [[index tag] (map-indexed vector tags)]
         ^{:key (:name tag)}
         [tag-component tag index])
       [@current-component])]))
