Rot13 = {
	map: null,

	convert: function( a ) {
		Rot13.init();

		var s = '';
		for ( i = 0; i < a.length; i++ ) {
			var b = a.charAt( i );
			s += ( ( b >= 'A' && b <= 'Z' ) || ( b >= 'a' && b <= 'z' ) ? Rot13.map[ b ] : b );
		}
		return s;
	},

	init: function() {
		if ( null != Rot13.map ) {
			return;
		}

		var map = new Array();
		var s   = "abcdefghijklmnopqrstuvwxyz";

		for ( i = 0; i < s.length; i++ ) {
			map[ s.charAt( i ) ] = s.charAt( ( i+13 ) % 26 );
		}
		for ( i = 0; i < s.length; i++ ) {
			map[ s.charAt( i ).toUpperCase() ] = s.charAt( ( i+13 ) % 26 ).toUpperCase();
		}

		Rot13.map = map;
	},

	write: function( a ) {
		document.write( Rot13.convert( a ) );
	},

	writeEmailLink: function( address, text ) {
		var decodedAddress = Rot13.convert( address ),
		    decodedText    = Rot13.convert( text ),
		    html           = '<a href="mailto:' + decodedAddress + '">' + decodedText + '</a>',
		    encodedHtml    = Rot13.convert( html );

		Rot13.write( encodedHtml );
	}
}
