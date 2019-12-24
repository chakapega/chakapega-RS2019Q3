import { apiDarkskyUrl, apiDarkskyKey, proxyUrl } from '../helpers/constants';

export default class GetWeather {
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

  async getWeatherForecast() {
    const language = localStorage.getItem('selectedLanguage');
    const { longitude, latitude } = this.store.currentPosition;
    const finalUrl = `${proxyUrl}${apiDarkskyUrl}${apiDarkskyKey}${latitude},${longitude}?units=si&lang=${language}`;

    const response = await fetch(finalUrl);
    this.store.weatherForecast = await response.json();

    this.broadcast();
  }
}
