(ns blog.components.tags
  (:require [blog.services.tag :refer [update-tags]]
            ["react-icons/io5" :refer [IoPricetagsOutline]]
            [reagent.core :as r]))

;; Componente para el icono
(defn icon []
  (r/as-element
    [:> IoPricetagsOutline {:class "text-xl"}]))

(defn tag-component [tag]
  (let [{:keys [name post-count]} tag]
    [:div {:class "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-center text-xs transition-all transform hover:scale-105 hover:shadow-sm dark:hover:bg-gray-700 dark:text-white shadow-sm"}

     [:a {:href (str "/archives?tag=" name)
          :target "_blank"
          :rel "noopener noreferrer"
          :class "flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-xs"}
      [icon]
      [:span name]]
     [:span {:class "block text-gray-500 dark:text-gray-400 mt-1 text-xs"} (str post-count " posts")]]))

(defn tags-component []
  (let [tags (update-tags)]
    [:div {:class "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"}
     (for [tag tags]
       ^{:key (:name tag)}
       [tag-component tag])]))
