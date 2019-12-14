import '../scss/main.scss';

import Layout from './layout/layout';
import Loader from './loader/loader';
import Store from './store/store';
import GetLocationInformation from './geolocation/getLocationInformation';
import GetCurrentDate from './date/getCurrentDate';
import BackgroundImage from './backgroundImage/backgroundImage';
import ShowLocationInformation from './geolocation/showLocationInformation';
import MapContainer from './geolocation/mapContainer';
import ShowDateInformation from './date/showDateInformation';
import ShowWeather from './weather/showWeather';
import GetWeather from './weather/getWeather';
import LanguageButtonsContainer from './control-container/languageButtonsContainer';
import TemperatureButtonsContainer from './control-container/temperatureButtonsContainer';
import SearchCityForm from './search/searchCityForm';
import ButtonRefreshBackgroundImage from './control-container/buttonRefreshBackgroundImage';
import ButtonVoiceSearchCity from './search/buttonVoiceSearchCity';

class App {
  constructor() {
    this.layout = new Layout();
    this.layout.showLayout();
    this.loader = new Loader();
    this.store = new Store();
    this.getLocationInformation = new GetLocationInformation(this.store);
    this.getCurrentDate = new GetCurrentDate(this.store);
    this.showLocationInformation = new ShowLocationInformation(this.store);
    this.mapContainer = new MapContainer(this.store);
    this.showDateInformation = new ShowDateInformation(this.store);
    this.getWeather = new GetWeather(this.store);
    this.showWeather = new ShowWeather(this.store);
    this.languageButtonsContainer = new LanguageButtonsContainer();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
    this.searchCityForm = new SearchCityForm(this.store);
    this.backgroundImage = new BackgroundImage(this.store);
    this.buttonRefreshBackgroundImage = new ButtonRefreshBackgroundImage();
    if (window.webkitSpeechRecognition) this.buttonVoiceSearchCity = new ButtonVoiceSearchCity(this.store);
  }

  start() {
    this.getLocationInformation.subscribe(() => {
      this.getCurrentDate.getCurrentDate();
      this.getWeather.getWeatherForecast();
      this.backgroundImage.getUrl();
    });
    this.getWeather.subscribe(() => {
      this.showLocationInformation.showLocationInformation();
      this.showDateInformation.showDateInformation();
      this.showWeather.showWeather();
      this.mapContainer.showMap();
      this.mapContainer.showCurrentCoordinates();
      this.loader.hideLoader();
    });
    this.languageButtonsContainer.subscribe(() => {
      this.loader.showLoader();
      this.searchCityForm.changeLanguage();
      this.getLocationInformation.getLocationInformation(this.store.city);
      this.getWeather.getWeatherForecast();
      this.showLocationInformation.showLocationInformation();
      this.showDateInformation.showDateInformation();
      this.mapContainer.showCurrentCoordinates();
      this.loader.hideLoader();
    });
    this.searchCityForm.subscribe(city => {
      this.loader.showLoader();
      this.getLocationInformation.getLocationInformation(city);
    });
    this.temperatureButtonsContainer.subscribe(() => this.showWeather.showWeather());
    this.buttonRefreshBackgroundImage.subscribe(() => {
      this.loader.showLoader();
      this.backgroundImage.getUrl();
      this.loader.hideLoader();
    });
    if (window.webkitSpeechRecognition) {
      this.buttonVoiceSearchCity.subscribe(city => {
        this.loader.showLoader();
        this.getLocationInformation.getLocationInformation(city);
      });
    }
    this.getLocationInformation.getCurrentPosition();
    this.languageButtonsContainer.addClickHandler();
    this.temperatureButtonsContainer.addClickHandler();
    this.searchCityForm.addSubmitHandler();
    this.buttonRefreshBackgroundImage.addClickHandler();
    if (window.webkitSpeechRecognition) this.buttonVoiceSearchCity.addClickHandler();
  }
}

new App().start();
