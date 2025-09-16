(ns core
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdomc]
            [components.button :refer [button]]))

;; Tabla de ejemplo
(defn table-component []
  [:div {:class "overflow-x-auto w-full max-w-4xl"}
   [:table {:class "min-w-full border border-gray-300 bg-white shadow-md rounded-lg"}
    [:thead {:class "bg-blue-600 text-white"}
     [:tr
      [:th {:class "px-4 py-2 text-left"} "Name"]
      [:th {:class "px-4 py-2 text-left"} "Role"]
      [:th {:class "px-4 py-2 text-left"} "Status"]]]
    [:tbody
     [:tr {:class "hover:bg-gray-100"}
      [:td {:class "px-4 py-2 border"} "Andre"]
      [:td {:class "px-4 py-2 border"} "Frontend Dev"]
      [:td {:class "px-4 py-2 border text-green-600"} "Active"]]
     [:tr {:class "hover:bg-gray-100"}
      [:td {:class "px-4 py-2 border"} "Coderlion"]
      [:td {:class "px-4 py-2 border"} "Backend Dev"]
      [:td {:class "px-4 py-2 border text-yellow-600"} "Pending"]]
     [:tr {:class "hover:bg-gray-100"}
      [:td {:class "px-4 py-2 border"} "Rafael"]
      [:td {:class "px-4 py-2 border"} "Data Scientist"]
      [:td {:class "px-4 py-2 border text-red-600"} "Inactive"]]]]])

(defn home-page []
  [:div {:class "min-h-screen bg-gray-100 flex flex-col p-6 space-y-6"}
   
   ;; header
   [:header {:class "p-4 bg-blue-600 text-white flex justify-between items-center"}
    [:h1 {:class "text-xl font-bold"} "Tailwind Table Test 📊"]]

   ;; main con tabla y botones al lado
   [:main {:class "flex flex-row gap-6"}
    ;; tabla
    [table-component]

    ;; columna de botones
    [:div {:class "flex flex-col space-y-4"}
     [button {:variant :default :size :sm :on-click #(js/alert "Default Button clicked")} "Default"]
     [button {:variant :outline :size :sm :on-click #(js/alert "Outline Button clicked")} "Outline"]
     [button {:variant :ghost :size :sm :on-click #(js/alert "Ghost Button clicked")} "Ghost"]
     [button {:variant :link :as-child true :on-click #(js/alert "Link clicked")} "Link"]]]

   ;; footer
   [:footer {:class "p-4 text-center text-sm bg-blue-600 text-white"} 
    "Made with ❤️ and Tailwind"]])


;; Atom para el root
(defonce root (atom nil))

;; Montar la app en el div#app
(defn mount-root []
  (let [container (.getElementById js/document "app")]
    (reset! root (rdomc/create-root container))
    (rdomc/render @root [home-page])))

;; Inicialización
(defn init! []
  (mount-root))

(init!)











;; yarn add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css
;; yarn add -D tailwindcss @tailwindcss/cli
;; yarn remove tailwindcss @tailwindcss/cli