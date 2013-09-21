;(function( window, document, undefined ) {

	'use strict';

	var s180 = (function() {

		var iframe = document.querySelector( '#iframe' );

		return {

			init : function() {
				this.change_url();
				this.init_events();
			},

			init_events : function() {
				window.addEventListener( 'hashchange', this.change_url );
			}, // init_events

			change_url : function() {
				var hash_url = window.location.hash.split( '#' ).join( '' );
				iframe.src = hash_url;
			}

		}; // return
	})(); // s180

	s180.init();

})( window, document );