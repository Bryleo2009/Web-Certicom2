$(document).ready(function () {
  // indicamos que se ejecuta la función a los 5 segundos de haberse
  // cargado la pagina

  setInterval(clickbutton, 5000);/**5000 */

  function clickbutton() {
    // simulamos el click del mouse en el boton del formulario
    $("#boton").click();
  }
});

// //leader
// window.onload = function () {
//   var contenedor = document.getElementById('loader');
//   var fondo = document.getElementById('preloader');
//   contenedor.style.visibility = 'hidden';
//   contenedor.style.opacity = 0;
//   fondo.style.visibility = 'hidden';
//   fondo.style.opacity = 0;
// }


(function($) {

  "use strict";
  
  const cfg = {
              scrollDuration : 800, // smoothscroll duration
              mailChimpURL   : ''   // mailchimp url
              };

  // Add the User Agent to the <html>
  // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
  // const doc = document.documentElement;
  // doc.setAttribute('data-useragent', navigator.userAgent);


 /* preloader
  * -------------------------------------------------- */
  const ssPreloader = function() {

      const preloader = document.querySelector('#preloader');

      if (!preloader) return;

      document.querySelector('html').classList.add('ss-preload');
      
      window.addEventListener('load', function() {
             
          document.querySelector('html').classList.remove('ss-preload');
          document.querySelector('html').classList.add('ss-loaded');

          preloader.addEventListener('transitionend', function(e) {
              if (e.target.matches("#preloader")) {
                  this.style.display = 'none';
              }
          });
      });

      // force page scroll position to top at page refresh
      window.addEventListener('beforeunload' , function () {
          window.scrollTo(0, 0);
      });
  };

 /* initialize
  * ------------------------------------------------------ */
  (function ssInit() {

      ssPreloader();

  })();

})(jQuery);