(ns coderLion.portapapel)

(import [java.awt.datatransfer StringSelection])

(defn ^java.awt.datatransfer.Clipboard get-portapapel []
  (->(java.awt.Toolkit/getDefaultToolkit)
  (.getSystemClipboard)))
;(get-portapapel)
;.getSystemClipboard sirve para obtener el 
;portapapeles del sistema
(defn copiar [text]
  (let [^java.awt.datatransfer.StringSelection seleccionar (StringSelection. text)] 
    (.setContents (get-portapapel)seleccionar seleccionar)
    seleccionar))
;Proceso de la funcion copiar:
;1. Se crea un objeto de la clase StringSelection
;2. Se le pasa el texto a copiar
;3. Se obtiene el portapapeles del sistema
;4. Se le pasa el objeto StringSelection al portapapeles
;5. Se retorna el objeto StringSelection
;6. Se llama a la funcion copiar
;7. Se le pasa el texto a copiar
;8. Se imprime el texto copiado

;Ejmplos de Testeo:
;(copiar "Calla gil!!")



