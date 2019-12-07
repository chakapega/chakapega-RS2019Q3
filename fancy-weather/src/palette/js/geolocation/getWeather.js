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
    const { longitude, latitude } = this.store.currentPosition;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://api.darksky.net/forecast/11e8ea62cae2009dabda1b337346ca8d/${latitude},${longitude}?units=si&lang=${language}`;

    const response = await fetch(proxyUrl + targetUrl);
    this.store.weatherForecast = await response.json();

    this.broadcast();
  }
}
