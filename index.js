  L.mapquest.key = 'xeJ8GxkvMW4NGA0DeW2Kqg3F5XkEPxNW';


fetch('http://www.mapquestapi.com/traffic/v2/incidents?key=KEY&inFormat=json&outFormat=json')
  .then((response) => response.json())
  .then((data) => console.log(data));






  /*
// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
*/