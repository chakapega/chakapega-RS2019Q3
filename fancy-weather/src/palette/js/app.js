import '../scss/main.scss';

import Layout from './layout/layout';
import Loader from './loader/loader';
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
import SearchCityForm from './geolocation/searchCityForm';

class App {
  constructor() {
    this.layout = new Layout();
    this.layout.showLayout();
    this.loader = new Loader();
    this.store = new Store();
    this.getCurrentDate = new GetCurrentDate(this.store);
    this.getLocationInformation = new GetLocationInformation(this.store);
    this.showLocationInformation = new ShowLocationInformation(this.store);
    this.mapContainer = new MapContainer(this.store);
    this.showDateInformation = new ShowDateInformation(this.store);
    this.getWeather = new GetWeather(this.store);
    this.showWeather = new ShowWeather(this.store);
    this.searchCityForm = new SearchCityForm(this.store);
    this.languageButtonsContainer = new LanguageButtonsContainer();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
  }

  start() {
    this.getLocationInformation.subscribe(() => {
      this.loader.showLoader();
      this.getWeather.getWeatherForecast();
    });
    this.getWeather.subscribe(() => {
      this.showDateInformation.showDateInformation();
      this.showLocationInformation.showLocationInformation();
      this.showWeather.showWeather();
      this.mapContainer.showMap();
      this.mapContainer.showCurrentCoordinates();
      this.loader.hideLoader();
    });
    this.languageButtonsContainer.subscribe(() => {
      this.loader.showLoader();
      this.getLocationInformation.getLocationInformation(this.store.city);
      this.getWeather.getWeatherForecast();
      this.showDateInformation.showDateInformation();
      this.showLocationInformation.showLocationInformation();
      this.mapContainer.showCurrentCoordinates();
      this.loader.hideLoader();
    });
    this.searchCityForm.subscribe(city => {
      this.getLocationInformation.getLocationInformation(city);
    });
    this.temperatureButtonsContainer.subscribe(() => this.showWeather.showWeather());

    this.getCurrentDate.getCurrentDate();
    this.getLocationInformation.getCurrentPosition();
    this.languageButtonsContainer.addClickHandler();
    this.temperatureButtonsContainer.addClickHandler();
    this.searchCityForm.addSubmitHandler();
  }
}

new App().start();
