(ns blog.services.post)

(defrecord Post [name url tag])

(defn create-post [name url tag]
  (->Post name url tag))

(def posts
  [(create-post "Introduction to Clojure" "/posts/clojure/intro" "Clojure")
   (create-post "Understanding React Hooks" "/posts/react/hooks" "React")
   (create-post "JavaScript Basics" "/posts/javascript/basics" "JavaScript")
   (create-post "Functional Programming Concepts" "/posts/functional/post1" "Functional Programming")
   (create-post "Functional Programming Thecniques" "/posts/functional/post2" "Functional Programming")
 (create-post "Design Patterns in Software" "/posts/software-design/patterns" "Software Design")])

