import '../scss/main.scss';

import Store from './store/store';
import GetCurrentDate from './date/getCurrentDate';
import GetLocationInformation from './geolocation/getLocationInformation';
import ShowLocationInformation from './geolocation/showLocationInformation';
import MapContainer from './geolocation/mapContainer';
import ShowDateInformation from './date/showDateInformation';
import ShowWeather from './weather/showWeather';
import GetWeather from './weather/getWeather';
import LanguageButtonsContainer from './control-container/languageButtonsContainer';
import TemperatureButtonsContainer from './control-container/temperatureButtonsContainer';

class App {
  constructor() {
    this.store = new Store();
    this.getCurrentDate = new GetCurrentDate(this.store);
    this.getLocationInformation = new GetLocationInformation(this.store);
    this.showLocationInformation = new ShowLocationInformation(this.store);
    this.mapContainer = new MapContainer(this.store);
    this.showDateInformation = new ShowDateInformation(this.store);
    this.getWeather = new GetWeather(this.store);
    this.showWeather = new ShowWeather(this.store);
    this.languageButtonsContainer = new LanguageButtonsContainer();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
  }

  start() {
    this.getLocationInformation.subscribe(() => {
      this.getWeather.getWeatherForecast();
    });
    this.getWeather.subscribe(() => {
      this.showDateInformation.showDateInformation();
      this.showLocationInformation.showLocationInformation();
      this.showWeather.showWeather();
      this.mapContainer.showMap();
      this.mapContainer.showCurrentCoordinates();
    });
    this.languageButtonsContainer.subscribe(() => {
      this.showDateInformation.showDateInformation();
      this.getLocationInformation.getLocationInformation();
      this.showLocationInformation.showLocationInformation();
      this.getWeather.getWeatherForecast();
      this.mapContainer.showCurrentCoordinates();
    });
    this.temperatureButtonsContainer.subscribe(() => this.showWeather.showWeather());

    this.getCurrentDate.getCurrentDate();
    // this.getLocationInformation.getCurrentPosition();
    // this.languageButtonsContainer.addClickHandler();
    // this.temperatureButtonsContainer.addClickHandler();
  }
}

new App().start();
