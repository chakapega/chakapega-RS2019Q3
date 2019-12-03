import '../scss/style.scss';

import ButtonLanguageSelect from './control-container/buttonLanguageSelect';
import TemperatureButtonsContainer from './control-container/temperatureButtonsContainer';

class App {
  constructor() {
    this.buttonLanguageSelect = new ButtonLanguageSelect();
    this.temperatureButtonsContainer = new TemperatureButtonsContainer();
  }

  start() {
    this.buttonLanguageSelect.addClickHandlerToButtonLanguageSelect();
    this.buttonLanguageSelect.addClickHandlerToListLanguageSelect();
    this.temperatureButtonsContainer.addClickHandler();
  }
}

new App().start();
