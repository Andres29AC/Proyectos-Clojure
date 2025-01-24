(ns blog.db
  (:require [re-frame.core :as re-frame]))

;;TODO: Inicializa el estado global
(re-frame/reg-event-db
  :initialize-db
  (fn [_ _]
    {:active-page :tags
     :selected-tag nil}))

;;TODO: Actualiza la pagina activa
(re-frame/reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :active-page page)))

;;TODO: Guarda el tag seleccionado
(re-frame/reg-event-db
  :set-selected-tag
  (fn [db [_ tag]]
    (assoc db :selected-tag tag)))

;;TODO: Suscripcion a la pagina activa
(re-frame/reg-sub
  :active-page
  (fn [db _]
    (:active-page db)))

;;TODO: Suscripcion al tag seleccionado
(re-frame/reg-sub
  :selected-tag
  (fn [db _]
    (:selected-tag db)))



