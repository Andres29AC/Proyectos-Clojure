(ns blog.components.footer
  (:require [reagent.core :as r]))

(defn footer []
  [:footer {:class "bg-neutral-900 text-gray-400 py-6"}
   [:div {:class "container mx-auto flex flex-col items-center space-y-4"}
    [:h1 {:class "text-2xl font-semibold text-white"} "KatasCode"]

    [:p {:class "text-center max-w-md"}
     "KatasCode is a blog where you will find excellent tutorials on web development (ASMR), examples with Clojure, Elixir, Rust, mobile development and much more. Each tutorial is presented in detail, step by step, with the necessary source code."]

    ;; Buy me a coffee
    [:a {:href "https://www.buymeacoffee.com/andredevelb"
         :class "bg-yellow-400 text-black font-cookie py-2 px-4 rounded-lg shadow-md flex items-center space-x-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-black"
         :target "_blank"
         :rel "noopener noreferrer"}

     [:img {:src "/assets/svg/coffee.svg"
            :alt "Coffee Icon"
            :class "w-6 h-6"}]

     "Buy me a coffee"]


    [:p {:class "text-xs"}
     "Copyright © 2025 "
     [:a {:href "#foolishdeveloper" :class "hover:text-white"} "CoderLion"]]]])
