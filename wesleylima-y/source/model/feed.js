exports.create = function( callback ) {

	function getFeed() {

		require( '../service/listFeed' ).create( callback );

	};

	getFeed();
	
	setInterval( getFeed, 3600000 );

};