export default class TemperatureButtonsContainer {
  constructor() {
    this.observers = [];
    this.temperatureButtonsContainer = document.querySelector('.temperature-buttons-container');
    this.temperatureButtonFahrenheit = document.querySelector('.temperature-button_fahrenheit');
    this.temperatureButtonCelsius = document.querySelector('.temperature-button_celsius');
    this.changeTemperatureUnits(localStorage.getItem('selectedTemperatureUnit') || 'celsius');
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addClickHandler() {
    this.temperatureButtonsContainer.addEventListener('click', event => {
      const selectedUnit = event.target.getAttribute('data-unit');

      this.changeTemperatureUnits(selectedUnit);
    });
  }

  changeTemperatureUnits(selectedUnit) {
    if (this.activeTemperatureUnit !== selectedUnit) {
      switch (selectedUnit) {
        case 'fahrenheit':
          this.temperatureButtonCelsius.classList.remove('temperature-button_active');
          this.temperatureButtonFahrenheit.classList.add('temperature-button_active');
          this.activeTemperatureUnit = selectedUnit;
          localStorage.setItem('selectedTemperatureUnit', selectedUnit);
          break;
        case 'celsius':
          this.temperatureButtonFahrenheit.classList.remove('temperature-button_active');
          this.temperatureButtonCelsius.classList.add('temperature-button_active');
          this.activeTemperatureUnit = selectedUnit;
          localStorage.setItem('selectedTemperatureUnit', selectedUnit);
          break;

        default:
          break;
      }

      this.broadcast();
    }
  }
}
