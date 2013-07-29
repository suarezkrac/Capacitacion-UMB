/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_HTML5_Logo_512}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando s// reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HTML5_Logo_512}", "click", function(sym, e) {
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por un atributo de destino para una nueva ventana)
         window.open("http://www.umb.edu.co", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-001");