export default class TemperatureButtonsContainer {
  constructor() {
    this.temperatureButtonsContainer = document.querySelector('.temperature-buttons-container');
    this.temperatureButtonFahrenheit = document.querySelector('.temperature-button_fahrenheit');
    this.temperatureButtonCelsius = document.querySelector('.temperature-button_celsius');
  }

  addClickHandler() {
    this.temperatureButtonsContainer.addEventListener('click', event => {
      const selectedUnit = event.target.getAttribute('data-unit');

      this.changeTemperatureUnits(selectedUnit);
    });
  }

  changeTemperatureUnits(selectedUnit) {
    switch (selectedUnit) {
      case 'fahrenheit':
        this.temperatureButtonCelsius.classList.remove('temperature-button_active');
        this.temperatureButtonFahrenheit.classList.add('temperature-button_active');
        break;
      case 'celsius':
        this.temperatureButtonFahrenheit.classList.remove('temperature-button_active');
        this.temperatureButtonCelsius.classList.add('temperature-button_active');
        break;

      default:
        break;
    }
  }
}
