	window.addEventListener("load", function() {
		var mapsProperties = {
			center: new google.maps.LatLng(37.495283, -121.917713),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			scaleControl: true,
			overviewMapControl: true,
			scrollwheel: false,
			rotateControl: true
		}
		var mapObject = new google.maps.Map(document.getElementById(
			"google-map-container"), mapsProperties);

		var marker = new google.maps.Marker({position: new google.maps.LatLng(37.495283, -121.917713), animation: google.maps.Animation.DROP, icon: "../images/home.png"})
		marker.setMap(mapObject);

		google.maps.event.addListener(marker, "click", function() {
			mapObject.setZoom(20);
		})
	}, false);
