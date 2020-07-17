(function( $ ) {
	'use strict';

	$(document).ready(function() {

		var boughtTogetherSlick = $('.bought-together-slick');
		if(boughtTogetherSlick.length > 0) {
			boughtTogetherSlick.slick();
		}

		var addAllToCartButton = $('.ajax_bought_together_add_to_cart');
		if(addAllToCartButton.length > 0) {
			addAllToCartButton.on('click', function(e) {
				e.preventDefault();

				var products = $(this).data(products);

				$.each(products.products, function(i, index) {
					var data = {
						"product_id" : index,
						"quantity" : 1
					};
					$.post( wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'add_to_cart'), data, function( response ) {
						if ( ! response ) {
							return;
						}

						if ( response.error && response.product_url ) {
							window.location = response.product_url;
							return;
						}

						// Redirect to cart option
						if ( wc_add_to_cart_params.cart_redirect_after_add === 'yes' ) {
							window.location = wc_add_to_cart_params.cart_url;
							return;
						}

						// Trigger event so themes can refresh other areas.
						$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, addAllToCartButton ] );
					});
				});
			});
		}
	} );

})( jQuery );