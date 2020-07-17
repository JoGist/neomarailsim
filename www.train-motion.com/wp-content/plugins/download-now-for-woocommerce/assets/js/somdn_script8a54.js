(function($) {

	/**
	 * Scripts relating to adding/removing the "loading" class which some themes use
	 */

	$( '.somdn-download-button:not(.somdn-checkbox-submit), .somdn-download-archive' ).click(function() {
		$( this ).addClass( 'loading' );
	});

	$( '.somdn-download-button, .somdn-download-archive' ).each(function() {
		$( this ).click(
		function(e) {
			var element = $( this );
			setTimeout(
				function() {
					if ( element.hasClass( 'loading' ) ) {
						element.removeClass( 'loading' );
					}
				},
				2000);
		});
	});

	/**********************************************************************/

	/**
	 * Scripts relating to download buttons that are actually anchor elements
	 */

	$( 'a.somdn-download-archive' ).click( function (e) {
		e.stopImmediatePropagation();
		var form = $( this ).closest( 'form.somdn-archive-download-form' );
		form.submit();
		return false;
	});

	$( '.somdn-download-link' ).click( function (e) {
		e.stopImmediatePropagation();
		var form = $( this ).closest( 'form' );
		form.submit();
		return false;
	});

	/**********************************************************************/

	/**
	 * Scripts relating to the multiple file checkbox form
	 */

	$( '.somdn-checkbox-form .somdn-checkbox-submit' ).click( function(e) {
		var form = $( this ).closest( 'form' );
		if ( $( form ).find( '.somdn-checkbox-form-checkbox:checked' ).length == 0 ) {
			e.preventDefault();
			$( '.somdn-form-validate' ).css( 'display', 'block' );
		} else {
			$( '.somdn-form-validate' ).css( 'display', 'none' );
			$( this ).addClass( 'loading' );
		}
	});

	$( '.somdn-checkbox-form-checkbox-all' ).click( function(e) {
		var c = this.checked;
		var form = $( this ).closest( 'form' );
		$( form ).find( '.somdn-checkbox-form-checkbox' ).prop( 'checked', c );
	});

	$( '.somdn-checkbox-form .somdn-checkbox-form-checkbox' ).click( function(e) {
		var form = $( this ).closest( 'form' );
		var checkboxes = $( form ).find( '.somdn-checkbox-form-checkbox' );
		var checked_count = $( form ).find( '.somdn-checkbox-form-checkbox:checked' ).length;
		var count = checkboxes.length;
		if ( checked_count < count ) {
			$( form ).find( '.somdn-checkbox-form-checkbox-all' ).prop( 'checked', false );
		} else {
			$( form ).find( '.somdn-checkbox-form-checkbox-all' ).prop( 'checked', true );
		}
	});

	/**********************************************************************/

})( jQuery );