import '../scss/style.scss';

import Store from './store/store';
import GetCurrentPosition from './geolocation/getCurrentPosition';
import MapContainer from './geolocation/mapContainer';
import WeatherContainer from './weather/weatherContainer';
import GetWeather from './geolocation/getWeather';
import ButtonLanguageSelect from './control-container/buttonLanguageSelect';
import TemperatureButtonsContainer from './control-container/temperatureButtonsContainer';

class App {
  constructor() {
    this.store = new Store();
    this.getCurrentPosition = new GetCurrentPosition(this.store);
    this.mapContainer = new MapContainer(this.store);
    this.weatherContainer = new WeatherContainer(this.store);
    this.getWeather = new GetWeather(this.store);
    this.buttonLanguageSelect = new ButtonLanguageSelect();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
  }

  start() {
    this.getCurrentPosition.subscribe(() => {
      this.getWeather.getWeatherForecast();
      this.mapContainer.showMap();
      this.mapContainer.showCurrentCoordinates();
    });
    this.getWeather.subscribe(() => this.weatherContainer.showWeather());
    this.buttonLanguageSelect.subscribe(() => {
      this.getWeather.getWeatherForecast();
      this.mapContainer.showCurrentCoordinates();
    });
    this.temperatureButtonsContainer.subscribe(() => this.weatherContainer.showWeather());
    this.getCurrentPosition.getCurrentPosition();
    this.buttonLanguageSelect.addClickHandlerToButtonLanguageSelect();
    this.buttonLanguageSelect.addClickHandlerToListLanguageSelect();
    this.temperatureButtonsContainer.addClickHandler();
  }
}

new App().start();
