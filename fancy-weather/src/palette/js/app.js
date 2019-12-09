import '../scss/style.scss';

import Store from './store/store';
import GetLocationInformation from './geolocation/getLocationInformation';
import MapContainer from './geolocation/mapContainer';
import ShowWeather from './weather/showWeather';
import GetWeather from './weather/getWeather';
import LanguageButtonsContainer from './control-container/languageButtonsContainer';
import TemperatureButtonsContainer from './control-container/temperatureButtonsContainer';

class App {
  constructor() {
    this.store = new Store();
    this.getLocationInformation = new GetLocationInformation(this.store);
    this.mapContainer = new MapContainer(this.store);
    this.getWeather = new GetWeather(this.store);
    this.showWeather = new ShowWeather(this.store);
    this.languageButtonsContainer = new LanguageButtonsContainer();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
  }

  start() {
    this.getLocationInformation.subscribe(() => {
      this.getWeather.getWeatherForecast();
      this.mapContainer.showMap();
      this.mapContainer.showCurrentCoordinates();
    });
    this.getWeather.subscribe(() => this.showWeather.showWeather());
    this.languageButtonsContainer.subscribe(() => {
      this.getLocationInformation.getLocationInformation();
      this.getWeather.getWeatherForecast();
      this.mapContainer.showCurrentCoordinates();
    });
    this.temperatureButtonsContainer.subscribe(() => this.showWeather.showWeather());
    this.getLocationInformation.getCurrentPosition();
    this.languageButtonsContainer.addClickHandler();
    this.temperatureButtonsContainer.addClickHandler();
  }
}

new App().start();
