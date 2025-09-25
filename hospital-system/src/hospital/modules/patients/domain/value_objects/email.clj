(ns hospital.modules.patients.domain.value-objects.email)

(defn valid? [email]
  (boolean (re-matches #".+@.+\..+" email)))

(defn create [email]
  (if (valid? email)
    email
    (throw (ex-info "Invalid email" {:value email}))))
