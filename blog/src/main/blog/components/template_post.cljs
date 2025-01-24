(ns blog.components.template-post
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            ["react-icons/fa" :refer [FaArrowLeft]]))

(def author "CoderLion (Andre)")

(defn current-date []
  (let [date (js/Date.)]
    (str (.toLocaleDateString date "es-ES" #js {:year "numeric" :month "long" :day "numeric"}))))

(defn template-post
  [title content on-back & {:keys [description tags related-links]}]
  (let [tag (first tags)] 
    [:div.post-container {:class "max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"}
     [:div 
      {:on-click #(set! (.-href js/window.location) (str "/archives?tag=" tag))
       :class "text-blue-500 hover:underline flex items-center space-x-2"}
      [:> FaArrowLeft {:class "text-xl"}] 
      [:span "Volver"]]
     [:h1.post-title {:class "text-3xl font-bold text-gray-800 mt-4"} title]
     [:div.post-meta {:class "flex items-center space-x-2 text-sm text-gray-600 mt-2"}
      [:span.post-author {:class "font-medium"} (str "Por: " author)]
      [:span.post-date {:class "italic"} (str " | " (current-date))]]
     (when description
       [:p.post-description {:class "text-gray-700 mt-4"} description])
     [:div.post-content {:class "mt-6 text-gray-800 leading-relaxed"} content]
     (when (seq tags)
       [:ul.post-tags {:class "mt-4 flex flex-wrap gap-2"}
        (for [tag tags]
          ^{:key tag} [:li.tag {:class "bg-blue-100 text-blue-600 px-2 py-1 rounded"} (str "#" tag)])])
     (when (seq related-links)
       [:div.related-links {:class "mt-6"}
        [:h3 {:class "text-xl font-semibold text-gray-800"} "Enlaces relacionados:"]
        [:ul {:class "mt-2 space-y-2"}
         (for [link related-links]
           ^{:key link} [:li [:a {:href link :target "_blank" :class "text-blue-500 hover:underline"} link]])]])]))

