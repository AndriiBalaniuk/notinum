$(document).ready(function(){
  $('#carousel').carousel({
    interval: false
  });
});

function initMap() {
  var mapDiv = document.getElementById('map');

  var myLatLng = {lat: 50.437195, lng: 30.515497};
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 11,
    styles: [
      {
          "stylers": [
              {
                  "hue": "#01060C"
              },
              {
                  "saturation": 20
              },
              {
                  "lightness": -20
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 80
              }
          ]
      }
  ]
  });
  var marker = new google.maps.Marker({
  position: {lat: 50.427195, lng: 30.515497},
  map: map,
  icon: 'img/marker.png'
});
}
