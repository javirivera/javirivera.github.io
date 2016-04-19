// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
	
var elem = document.querySelector('.gallery');
var flkty = new Flickity( elem, {
 	// options
	wrapAround: true,
	autoPlay: 2400,
	arrowShape: {
   	x0: 10,
 		x1: 60, y1: 50,
 		x2: 75, y2: 35,
 		x3: 40
	},
	 setGallerySize: false,
	 cellSelector: '.gallery-cell'
	});

$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 1,
        scroll: false,
        onStart: {
          duration: 500, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
						
          }
        },
				onAfter: function($container, $newContent) {
					var elem = document.querySelector('.gallery');
					var flkty = new Flickity( elem, {
					// options
					wrapAround: true,
					autoPlay: 1800,
					arrowShape: {
						x0: 10,
						x1: 60, y1: 50,
						x2: 75, y2: 35,
						x3: 40
					},
					setGallerySize: false,
					cellSelector: '.gallery-cell'
				});

				}
      },
      smoothState = $page.smoothState(options).data('smoothState');
});
	
	});