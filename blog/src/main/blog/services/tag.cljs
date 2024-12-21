(ns blog.services.tag)

;; Definición de la clase Tag
(defrecord Tag [url name post-count])

;; Constructor para crear un nuevo Tag
(defn create-tag [url name post-count]
  (->Tag url name post-count))
;; Lista de etiquetas
(def tags
  [(create-tag "/tags/clojure" "Clojure" 10)
   (create-tag "/tags/react" "React" 8)
   (create-tag "/tags/javascript" "JavaScript" 15)
   (create-tag "/tags/web-development" "Web Development" 20) 
   (create-tag "/tags/programming" "Programming" 25) 
   (create-tag "/tags/functional-programming" "Functional Programming" 5)
   ])