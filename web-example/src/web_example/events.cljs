(ns web-example.events
  (:require
   [re-frame.core :as re-frame] 
   [web-example.db :as db]
   [day8.re-frame.http-fx] 
   [ajax.core :as ajax]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   )) 
;day8.re-frame.tracing es un namespace que sirve para
;agregar trazas a los eventos de re-frame. El namespace
;day8.re-frame.tracing tiene una macro llamada fn-traced
;que recibe dos argumentos, el primero es el nombre del
;evento y el segundo es la función que se va a ejecutar
(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(re-frame/reg-event-db
 ::update-name
 (fn [db [_ val]]
 (assoc db :name val)))
;re-frame/reg-event-db sirve para registrar un evento
;que modifica el estado de la aplicación. El primer
;argumento es el nombre del evento y el segundo es
;una función que recibe dos argumentos, el primero
;es el estado de la aplicación y el segundo es el
;valor que se le pasa al evento. En este caso, el
;nombre del evento es ::update-name y la función
;recibe dos argumentos, el primero es el estado de
;la aplicación y el segundo es un vector que contiene
;el valor que se le pasa al evento. En este caso,
;el valor que se le pasa al evento es val.
 ;(assoc db :name val) es una función que
  ;recibe dos argumentos, el primero es el
  ;nombre de la clave y el segundo es el valor
  ;de la clave. En este caso, la clave es :name
  ;y el valor es val. La función assoc devuelve
  ;un nuevo map con la clave :name y el valor val
  ;y lo asigna a la variable db.

(re-frame/reg-event-fx         ;; note the trailing -fx
  ::fetch-users           ;; usage:  (dispatch [:handler-with-http])
  (fn [{:keys [db]} _]         ;; the first param will be "world"
    {:db   (assoc db :loading true) ;; causes the twirly-waiting-dialog to show??
     :http-xhrio {:method          :get
                  :uri             "https://reqres.in/api/users?page=2"
                  :timeout         8000                                           ;; optional see API docs
                  :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                  :on-success      [::fetch-users-success]  ;; dispatch an event with the result
                  :on-failure      [:bad-http-result]}}))

(->{}
          (assoc :loading false)
          (assoc :users "data"))

(re-frame/reg-event-db
 ::fetch-users-success
 (fn [db [_ {:keys [data]}]]
   (-> db 
       (assoc :loading false)
       (assoc :users data)
       )))    