const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default class MapContainer {
  constructor(store) {
    this.store = store;
    this.coordinateLongitude = document.querySelector('.coordinate_longitude');
    this.coordinateLatitude = document.querySelector('.coordinate_latitude');
  }

  showMap() {
    const zoom = this.store.locationInformation.city ? 10 : 15;
    const { longitude, latitude } = this.store.currentPosition;

    /* eslint-disable no-new */
    new mapboxgl.Map({
      container: 'map',
      center: [longitude, latitude],
      minZoom: zoom,
      pitch: 55,
      style: 'mapbox://styles/mapbox/streets-v10',
      accessToken: 'pk.eyJ1IjoiY2hha2FwZWdhIiwiYSI6ImNrM3Qwa2hyazBidGozaG80bWE3enM1MDgifQ.B1712DNd1OF3xiNb7BLJig',
    });
  }

  showCurrentCoordinates() {
    const { longitude, latitude } = this.defineTextCoordinateProperties();

    this.coordinateLongitude.textContent = longitude;
    this.coordinateLatitude.textContent = latitude;
  }

  defineTextCoordinateProperties() {
    const { longitude, latitude } = this.store.currentPosition;
    const coordinateTexts = {};

    switch (localStorage.getItem('selectedLanguage')) {
      case 'EN':
        coordinateTexts.longitude = `Longitude: ${longitude[0] + longitude[1]}°${longitude[3] + longitude[4]}'`;
        coordinateTexts.latitude = `Latitude: ${latitude[0] + latitude[1]}°${latitude[3] + latitude[4]}'`;
        break;
      case 'BE':
        coordinateTexts.longitude = `Даўгата: ${longitude[0] + longitude[1]}°${longitude[3] + longitude[4]}'`;
        coordinateTexts.latitude = `Шырата: ${latitude[0] + latitude[1]}°${latitude[3] + latitude[4]}'`;
        break;
      case 'RU':
        coordinateTexts.longitude = `Долгота: ${longitude[0] + longitude[1]}°${longitude[3] + longitude[4]}'`;
        coordinateTexts.latitude = `Широта: ${latitude[0] + latitude[1]}°${latitude[3] + latitude[4]}'`;
        break;

      default:
        break;
    }

    return coordinateTexts;
  }
}
