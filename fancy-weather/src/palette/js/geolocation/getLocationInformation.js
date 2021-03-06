import {
  apiIpinfoUrl,
  apiIpinfoKey,
  apiOpencagedataUrl,
  apiOpencagedataKey,
  statusOk,
  statusError,
} from '../helpers/constants';

export default class GetLocationInformation {
  constructor(store) {
    this.store = store;
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  getCurrentPosition() {
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    const success = pos => {
      this.store.currentPosition.latitude = pos.coords.latitude.toString();
      this.store.currentPosition.longitude = pos.coords.longitude.toString();

      this.getLocationInformation();
    };

    const error = () => {
      const finalUrl = `${apiIpinfoUrl}${apiIpinfoKey}`;

      fetch(finalUrl)
        .then(response => {
          return response.json();
        })
        .then(ipInfo => {
          this.store.locationInformation.city = ipInfo.city;

          this.getLocationInformation(ipInfo.city);
        });
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  getLocationInformation(city) {
    const searchTarget = city || `${this.store.currentPosition.latitude},${this.store.currentPosition.longitude}`;
    const language = localStorage.getItem('selectedLanguage');

    const finalUrl = `${apiOpencagedataUrl}${apiOpencagedataKey}&language=${language}&q=${searchTarget}`;

    fetch(finalUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        [this.store.locationInformation] = data.results;
        this.store.locationInformation.timezone = data.results[0].annotations.timezone.name;

        if (city) {
          this.store.currentPosition.latitude = data.results[0].geometry.lat.toString();
          this.store.currentPosition.longitude = data.results[0].geometry.lng.toString();
          this.store.locationInformation.city = city;
        } else {
          this.store.locationInformation.city = null;
        }

        this.broadcast(statusOk);
      })
      .catch(() => {
        this.broadcast(statusError);
      });
  }
}
