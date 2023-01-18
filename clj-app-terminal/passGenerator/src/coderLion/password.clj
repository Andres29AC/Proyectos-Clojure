(ns coderLion.password)

;! Primera forma de hacerlo:
; (def chars-disponibles (reduce(fn[acc val]
;                                 (str acc (char val))) "" (range 33 123)))

; (rand-nth chars-disponibles)

; (defn generar-password [length]
;  (loop [password ""]
;         (if (= (count password)length)
;           password
;           (recur(str password (rand-nth chars-disponibles))))))

; (generar-password 10)

;! Segunda forma de hacerlo: Mas elegante
(defn generar-password [length]
  (let[chars-disponibles (reduce(fn[acc val] 
                                  (str acc (char val)))" "(range 33 123))]

  (loop [password " "]
        (if (= (count password)length)
          password
          (recur(str password (rand-nth chars-disponibles)))))))

















