(function(window, google, mapster) {

	mapster.MAP_OPTIONS = {
		center: {
			lat: 37.495283,
			lng: -121.917713
		},
		zoom: 14,
		// disableDefaultUI: true
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	}


}(window, google, window.Mapster || (window.Mapster = {})))