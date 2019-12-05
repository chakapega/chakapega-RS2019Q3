export default class MapContainer {
  constructor() {

  }

  showMap() {
    const longitude = localStorage.getItem('longitude');
    const latitude = localStorage.getItem('latitude');

    new mapboxgl.Map({
      container: 'map',
      center: [longitude, latitude],
      minZoom: 16,
      pitch: 55,
      style: 'mapbox://styles/mapbox/streets-v10',
      accessToken:
        'pk.eyJ1IjoiY2hha2FwZWdhIiwiYSI6ImNrM3Qwa2hyazBidGozaG80bWE3enM1MDgifQ.B1712DNd1OF3xiNb7BLJig',
    });
  }
}
