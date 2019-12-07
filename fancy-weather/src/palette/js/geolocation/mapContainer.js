const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default class MapContainer {
  constructor(store) {
    this.store = store;
    this.coordinateLongitude = document.querySelector('.coordinate_longitude');
    this.coordinateLatitude = document.querySelector('.coordinate_latitude');
  }

  showMap() {
    const { longitude, latitude } = this.store.currentPosition;

    /* eslint-disable no-new */
    new mapboxgl.Map({
      container: 'map',
      center: [longitude, latitude],
      minZoom: 16,
      pitch: 55,
      style: 'mapbox://styles/mapbox/streets-v10',
      accessToken: 'pk.eyJ1IjoiY2hha2FwZWdhIiwiYSI6ImNrM3Qwa2hyazBidGozaG80bWE3enM1MDgifQ.B1712DNd1OF3xiNb7BLJig',
    });
    this.showCurrentCoordinates(longitude + '', latitude + '');
  }

  showCurrentCoordinates(longitude, latitude) {
    this.coordinateLongitude.textContent = `Longitude: ${longitude[0] + longitude[1]}°${longitude[3] + longitude[4]}'`;
    this.coordinateLatitude.textContent = `Longitude: ${latitude[0] + latitude[1]}°${latitude[3] + latitude[4]}'`;
  }
}
