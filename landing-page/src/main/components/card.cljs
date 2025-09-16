(ns components.card
  (:require [clojure.string :as str]))

;; función utilitaria para concatenar clases como en shadcn
(defn cn [& classes]
  (str/join " " (filter some? classes)))

(defn Card [{:keys [class] :as props} & children]
  (into
    [:div (assoc props :class (cn "rounded-xl border bg-white text-black shadow-sm" class))]
    children))

(defn CardHeader [{:keys [class] :as props} & children]
  (into
    [:div (assoc props :class (cn "flex flex-col space-y-1.5 p-6" class))]
    children))

(defn CardTitle [{:keys [class] :as props} & children]
  (into
    [:h3 (assoc props :class (cn "text-2xl font-semibold leading-none tracking-tight" class))]
    children))

(defn CardDescription [{:keys [class] :as props} & children]
  (into
    [:p (assoc props :class (cn "text-sm text-gray-500" class))]
    children))

(defn CardContent [{:keys [class] :as props} & children]
  (into
    [:div (assoc props :class (cn "p-6 pt-0" class))]
    children))

(defn CardFooter [{:keys [class] :as props} & children]
  (into
    [:div (assoc props :class (cn "flex items-center p-6 pt-0" class))]
    children))
