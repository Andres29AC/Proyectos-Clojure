(ns coderLion.passGenerator
  (:require [coderLion.password :refer [generar-password]]
            [coderLion.portapapel :refer [copiar]]
            [clojure.tools.cli :refer [parse-opts]])
  (:gen-class))
                                                  
(def cli-options
  ;; An option with a required argument
  [["-l" "--length LENGTH" "Longitud del password:"
    :default 8
    :parse-fn #(Integer/parseInt %)
    :validate [#(< 0 % 0x100) "Must be a number between 0 and 100"]]
   ["-h" "--help"]])

(defn -main
  "Main de la aplicacion"
  [& args]
  (let [arguments (parse-opts args cli-options)
        options (:options arguments)
        sumary (:sumary arguments)] 
    (if (:help options)
      (println sumary)
      (let [generar-password (generar-password(:length options))]
        (copiar generar-password)
        (println "Password generado: " generar-password))))) 








