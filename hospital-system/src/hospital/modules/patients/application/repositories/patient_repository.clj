(ns hospital.modules.patients.application.repositories.patient-repository)

(comment #NOTE - 
  Un protocolo en Clojure parecida a:
    - interface en Java
    - trait en Rust
    - protocol en python
    - interface en Go
  Define metodos que deben implementarse pero no su logica
)
(defprotocol PatientRepository
  (save [this patient])
  (find-by-id [this id])
  (find-all [this])
  (delete [this id]))

