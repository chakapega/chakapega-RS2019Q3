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
    const { apiDarkskyUrl } = this.store;
    const { proxyUrl } = this.store;
    const { apiDarkskyKey } = this.store;
    const { longitude, latitude } = this.store.currentPosition;
    let language;

    switch (localStorage.getItem('selectedLanguage')) {
      case 'EN':
        language = 'en';
        break;
      case 'BE':
        language = 'be';
        break;
      case 'RU':
        language = 'ru';
        break;

      default:
        break;
    }

    const finalUrl = `${proxyUrl}${apiDarkskyUrl}${apiDarkskyKey}${latitude},${longitude}?units=si&lang=${language}`;
    const response = await fetch(finalUrl);
    this.store.weatherForecast = await response.json();

    this.broadcast();
  }
}
