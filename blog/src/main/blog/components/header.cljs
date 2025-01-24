(ns blog.components.header
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]))

(defn header []
  [:header {:class "flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300 shadow-md"}
   [:div {:class "flex items-center cursor-pointer"
          :on-click #(re-frame/dispatch [:set-active-page :tags])} 
    [:img {:src "/assets/svg/developer.svg"
           :alt "Logo del blog"
           :class "w-12 h-12"}]
    [:span {:class "ml-2 text-xl font-bold text-gray-800"} "KatasCode"]]
   [:nav
    [:ul {:class "flex space-x-6"}
     [:li [:a {:href "https://github.com/Andres29AC" :class "text-gray-700 hover:text-blue-500 font-semibold"} "Github"]]]]])
