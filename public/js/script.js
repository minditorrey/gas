(function(window, mapster) {

	var options = mapster.MAP_OPTIONS,
	element = document.getElementById('map-canvas'),
	map = mapster.create(element, options);
	

	//////add properties here to the object literal
	var marker = map.addMarker({
		lat: 37.495283,
		lng: -121.917713,
		id: 1,

		icon: '/images/home.png'
	});

		var marker2 = map.addMarker({
		lat: 37.499293,
		lng: -121.9198193,
		id: 2,
		animation: google.maps.Animation.BOUNCE,
		icon: '/images/zombie.png'
	});



}(window, window.Mapster));