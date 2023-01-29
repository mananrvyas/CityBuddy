mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJsZWVubW9udGVpcm8iLCJhIjoiY2xkZ2dyYXB2MHhjbDN3cjhwMzVxZHR5aiJ9.nk3cnBcTtUmDjrrWxGeoCA";


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}


function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  // const geojson = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-77.032, 38.913]
  //       },
  //       properties: {
  //         title: 'Mapbox',
  //         description: 'Washington, D.C.'
  //       }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-122.414, 37.776]
  //       },
  //       properties: {
  //         title: 'Mapbox',
  //         description: 'San Francisco, California'
  //       }
  //     }
  //   ]
  // };

//   // add markers to map
// for (const feature of geojson.features) {
//   // create a HTML element for each feature
//   const el = document.createElement('div');
//   el.className = 'marker';

  // make a marker for each feature and add to the map
//   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
// }
var geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
map.on('load', function() {
  geolocate.trigger();
});
geolocate.on('geolocate', locateUser);

function locateUser(e) {
  console.log('A geolocate event has occurred.');
  console.log("lng:" + e.coords.longitude + ", lat:" + e.coords.latitude)
    geolocate.off('geolocate', null);
}

function locateUser(e) {
  console.log('A geolocate event has occurred.');
  console.log("lng:" + e.coords.longitude + ", lat:" + e.coords.latitude)
    geolocate.off('geolocate', null);
}


  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}

