/**
 * footer-reveal.js
 * 
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014 Iain Andrew
 * https://github.com/IainAndrew
 */

(function($) {

  $.fn.footerReveal = function(options) {

    var $this = $(this),
        $prev = $this.prev(),
        $win = $(window),

        defaults = $.extend ({
          shadow : true,
          shadowOpacity: 0.8,
          zIndex : -100
        }, options ),

        settings = $.extend(true, {}, defaults, options);

    if ($this.outerHeight() <= $win.outerHeight()) {
      $this.css({
        'z-index' : defaults.zIndex,
        position : 'fixed',
        bottom : 0
      });
    }

    return this;

  };

}) (jQuery);