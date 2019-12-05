import '../scss/style.scss';

import GetCurrentPosition from './geolocation/getCurrentPosition';
import MapContainer from './geolocation/mapContainer';
import ButtonLanguageSelect from './control-container/buttonLanguageSelect';
import TemperatureButtonsContainer from './control-container/temperatureButtonsContainer';

class App {
  constructor() {
    this.getCurrentPosition = new GetCurrentPosition();
    this.map = new MapContainer();
    this.buttonLanguageSelect = new ButtonLanguageSelect();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
  }

  start() {
    this.getCurrentPosition.subscribe(() => {
      this.map.showMap();
    });
    this.getCurrentPosition.getCurrentPosition();
    this.buttonLanguageSelect.addClickHandlerToButtonLanguageSelect();
    this.buttonLanguageSelect.addClickHandlerToListLanguageSelect();
    this.temperatureButtonsContainer.addClickHandler();
  }
}

new App().start();
