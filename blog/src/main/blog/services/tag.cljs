(ns blog.services.tag
  (:require [blog.services.post :refer [posts]]))


(defrecord Tag [url name post-count])


(defn create-tag [url name post-count]
  (->Tag url name post-count))


(def tags
  [(create-tag "/tags/clojure" "Clojure" 0)
   (create-tag "/tags/react" "React" 0)
   (create-tag "/tags/javascript" "JavaScript" 0)
   (create-tag "/tags/web-development" "Web Development" 0)
   (create-tag "/tags/programming" "Programming" 0)
   (create-tag "/tags/functional-programming" "Functional Programming" 0)
   (create-tag "/tags/development" "Development" 0)
   (create-tag "/tags/software-engineering" "Software Engineering" 0)
   (create-tag "/tags/software-architecture" "Software Architecture" 0)
   (create-tag "/tags/software-design" "Software Design" 0)])


(defn tag-posts [tag-name]
  (filter #(= (:tag %) tag-name) posts))


(defn update-tags []
  (map (fn [tag]
         (let [tag-name (:name tag)
               count (count (tag-posts tag-name))]
           (assoc tag :post-count count)))
       tags))



