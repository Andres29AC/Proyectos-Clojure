;; (ns hospital.modules.patients.domain.value-objects.document-number)

;; (defn valid? [doc-number]
;;   (and (string? doc-number)
;;        (re-matches #"\d{8,12}" doc-number))) ; ejemplo: 8-12 dígitos

;; (defn create [doc-number]
;;   (if (valid? doc-number)
;;     doc-number
;;     (throw (ex-info "Invalid document number" {:value doc-number}))))

(ns hospital.modules.patients.domain.value-objects.document-number)

(defn valid? [doc-number]
  (and (string? doc-number)
       (re-matches #"\d{8,12}" doc-number))) ; 8-12 dígitos

(defn create [doc-number]
  (cond
    (nil? doc-number)
    (throw (ex-info "Document number is required" {:value nil}))

    (not (valid? doc-number))
    (throw (ex-info "Invalid document number" {:value doc-number}))

    :else doc-number))
