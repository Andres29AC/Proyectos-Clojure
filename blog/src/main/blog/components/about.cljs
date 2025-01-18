(ns blog.components.about)


;; (defn profile-card []
;;   [:div {:style {:border "1px solid #ddd"
;;                  :border-radius "12px"
;;                  :padding "24px"
;;                  :max-width "800px"
;;                  :display "flex"
;;                  :align-items "center"
;;                  :box-shadow "0 6px 12px rgba(0, 0, 0, 0.18)"
;;                  :margin-bottom "24px"
;;                  :transition "transform 0.3s ease, box-shadow 0.3s ease"
;;                  :cursor "pointer"
;;                  :on-mouse-over #(aset (.-style (.-currentTarget %)) "transform" "scale(1.02)")
;;                  :on-mouse-out #(aset (.-style (.-currentTarget %)) "transform" "scale(1)")}}
;;    [:img {:src "/assets/img/nitoku.png"
;;           :alt "Foto de perfil"
;;           :style {:border-radius "50%"
;;                   :width "150px"
;;                   :height "150px"
;;                   :object-fit "cover"
;;                   :margin-right "24px"}}]
;;    [:div {:style {:text-align "left"}}
;;     [:h2 {:style {:font-size "1.8rem" :margin "0 0 8px"}} "CoderLion"]
;;     [:p {:style {:color "#666" :margin "8px 0" :font-size "1.2rem"}} "Ing de Sistemas 💻"]
;;     [:p {:style {:color "#666" :margin "8px 0" :font-size "1.2rem"}} "Freelancer 🚀🇵🇪"]
;;     [:a {:href "https://jade-buttercream-ee62f8.netlify.app/"
;;          :target "_blank"
;;          :style {:text-decoration "none"
;;                  :display "inline-block"
;;                  :padding "10px 20px"
;;                  :background-color "#007bff"
;;                  :color "#fff"
;;                  :border-radius "5px"
;;                  :font-size "1.1rem"
;;                  :transition "background-color 0.3s ease"}}
;;      "📁 Portfolio"]
;;     ]])
(defn profile-card []
  [:div {:style {:border "1px solid #ddd"
                 :border-radius "12px"
                 :padding "24px"
                 :max-width "800px"
                 :display "flex"
                 :align-items "center"
                 :box-shadow "0 6px 12px rgba(0, 0, 0, 0.18)"
                 :margin-bottom "24px"
                 :transition "transform 0.3s ease, box-shadow 0.3s ease"
                 :cursor "pointer"
                 :on-mouse-over #(aset (.-style (.-currentTarget %)) "transform" "scale(1.02)")
                 :on-mouse-out #(aset (.-style (.-currentTarget %)) "transform" "scale(1)")}}
   [:img {:src "/assets/img/nitoku.png"
          :alt "Foto de perfil"
          :style {:border-radius "50%"
                  :width "150px"
                  :height "150px"
                  :object-fit "cover"
                  :margin-right "24px"}}]
   [:div {:style {:text-align "left"}}
    [:h2 {:style {:font-size "1.8rem" :margin "0 0 8px"}} "CoderLion"]
    [:p {:style {:color "#666" :margin "8px 0" :font-size "1.2rem"}} "Ing de Sistemas 💻"]
    [:p {:style {:color "#666" :margin "8px 0" :font-size "1.2rem"}} "Freelancer 🚀🇵🇪"]
    [:a {:href "https://jade-buttercream-ee62f8.netlify.app/"
         :target "_blank"
         :style {:text-decoration "none"
                 :display "inline-block"
                 :padding "10px 20px"
                 :background-color "#007bff"
                 :color "#fff"
                 :border-radius "5px"
                 :font-size "1.1rem"
                 :transition "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease"
                 :box-shadow "0 4px 8px rgba(0, 0, 0, 0.1)"
                 :cursor "pointer"
                 :transform "scale(1)"}
         :on-mouse-over #(do
                           (aset (.-style (.-currentTarget %)) "background-color" "#0056b3")
                           (aset (.-style (.-currentTarget %)) "transform" "scale(1.05)"))
         :on-mouse-out #(do
                          (aset (.-style (.-currentTarget %)) "background-color" "#007bff")
                          (aset (.-style (.-currentTarget %)) "transform" "scale(1)"))}
     "📁 Portfolio"]
    ]])


(defn andre-card []
  [:div {:style {:background "#1a1a1a"
                 :color "#fff"
                 :padding "24px"
                 :border-radius "16px"
                 :width "560px"
                 :margin "16px auto"
                 :box-shadow "0 4px 8px rgba(0, 0, 0, 0.3)"
                 :font-family "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
   [:div {:style {:margin-bottom "24px"}}
    [:h3 {:style {:font-size "1.5rem"
                  :margin-bottom "8px"
                  :border-bottom "1px solid #444"
                  :padding-bottom "4px"
                  :letter-spacing "1px"}} "Description"]
    [:p {:style {:font-size "1rem"
                 :line-height "1.5"
                 :color "#ccc"}}
     "My name is Andre. I have more than 2 years of experience working in companies and now I am a freelancer specialized in software development, mainly in commercial areas."]]

   [:div {:style {:margin-bottom "24px"}}
    [:h3 {:style {:font-size "1.5rem"
                  :margin-bottom "8px"
                  :border-bottom "1px solid #444"
                  :padding-bottom "4px"
                  :letter-spacing "1px"}} "Some things about me"]
    [:ul {:style {:list-style-type "disc"
                  :padding-left "20px"
                  :color "#ccc"}}
     [:li {:style {:margin-bottom "8px"}} "I am mainly a backend and Mobile developer (Flutter 💚 )."]
     [:li {:style {:margin-bottom "8px"}} "Fanatic with Neovim and Emacs editors."]
     [:li {:style {:margin-bottom "8px"}} "I do frontend work (NextJS, React, Astro and Angular)."]
     [:li {:style {:margin-bottom "8px"}} "I create free projects and examples in Clojure, Elixir and Rust."]]]

   ;; Social Media Section
   [:div {:style {:display "flex"
                  :justify-content "center"
                  :gap "16px"}}
    ;; LinkedIn Icon
    [:a {:href "https://www.linkedin.com/groups/12455671/"
         :target "_blank"
         :style {:text-decoration "none"}}
     [:img {:src "/assets/svg/linkedin.svg"
            :alt "LinkedIn"
            :style {:width "32px"
                    :height "32px"}}]]
    ;; Email Icon
    [:a {:href "mailto:andredeveloper92@gmail.com"
         :target "_blank"
         :style {:text-decoration "none"}}
     [:img {:src "/assets/svg/email2.svg"
            :alt "Email"
            :style {:width "32px"
                    :height "32px"}}]]
    ;; GitHub Icon
    [:a {:href "https://github.com/Andres29AC"
         :target "_blank"
         :style {:text-decoration "none"}}
     [:img {:src "/assets/svg/github.svg"
            :alt "GitHub"
            :style {:width "32px"
                    :height "32px"
                    :filter "invert(100%)"}}]]]])




(defn about-page []
  [:div {:style {:display "flex"
                 :justify-content "center"
                 :align-items "center"
                 :flex-direction "row"
                 :flex-wrap "wrap"
                 :margin-top "0px"
                 :max-width "1200px"
                 :margin "0 auto"}} 
   [profile-card]
   [andre-card]])





;;https://widdindustries.com/blog/archive.html
;;https://svgartista.net/
