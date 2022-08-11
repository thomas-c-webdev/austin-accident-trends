  L.mapquest.key = 'xeJ8GxkvMW4NGA0DeW2Kqg3F5XkEPxNW';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});