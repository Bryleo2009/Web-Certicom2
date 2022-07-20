$(document).ready(function () {
    // indicamos que se ejecuta la función a los 5 segundos de haberse
    // cargado la pagina
    
    setInterval(clickbutton, 50000);/**5000 */ 
  
    function clickbutton() {
      // simulamos el click del mouse en el boton del formulario
      $("#boton").click();
    }
  });

  window.addEventListener('touchstart', function(event) {
    // some logic
    event.preventDefault(); // <-- that should not be used in passive
    // some other magic
});