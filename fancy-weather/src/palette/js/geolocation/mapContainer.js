import { coordinateNames, apiMapboxStyle, apiMapboxKey } from '../helpers/constants';

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

    /* eslint-disable */
    new mapboxgl.Map({
      container: 'map-container',
      center: [longitude, latitude],
      minZoom: zoom,
      pitch: 55,
      style: apiMapboxStyle,
      accessToken: apiMapboxKey,
    });
    /* eslint-enable */
  }

  showCurrentCoordinates() {
    const { longitude, latitude } = this.defineTextCoordinateProperties();

    this.coordinateLongitude.textContent = longitude;
    this.coordinateLatitude.textContent = latitude;
  }

  defineTextCoordinateProperties() {
    const language = localStorage.getItem('selectedLanguage').toLowerCase();
    const { longitude, latitude } = this.store.currentPosition;
    const coordinateTexts = {};
    const finalLongitude = `${longitude.split('.')[0]}° ${longitude.split('.')[1][0] + longitude.split('.')[1][1]}'`;
    const finalLatitude = `${latitude.split('.')[0]}° ${latitude.split('.')[1][0] + latitude.split('.')[1][1]}'`;

    coordinateTexts.longitude = `${coordinateNames[0][language]} ${finalLongitude}`;
    coordinateTexts.latitude = `${coordinateNames[1][language]} ${finalLatitude}`;

    return coordinateTexts;
  }
}
