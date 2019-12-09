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
      container: 'map-container',
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
    const finalLongitude = `${longitude.split('.')[0]}° ${longitude.split('.')[1][0] + longitude.split('.')[1][1]}'`;
    const finalLatitude = `${latitude.split('.')[0]}° ${latitude.split('.')[1][0] + latitude.split('.')[1][1]}'`;

    switch (localStorage.getItem('selectedLanguage')) {
      case 'EN':
        coordinateTexts.longitude = `Longitude ${finalLongitude}`;
        coordinateTexts.latitude = `Latitude ${finalLatitude}`;
        break;
      case 'BE':
        coordinateTexts.longitude = `Даўгата ${finalLongitude}`;
        coordinateTexts.latitude = `Шырата ${finalLatitude}`;
        break;
      case 'RU':
        coordinateTexts.longitude = `Долгота ${finalLongitude}`;
        coordinateTexts.latitude = `Широта ${finalLatitude}`;
        break;

      default:
        break;
    }

    return coordinateTexts;
  }
}
