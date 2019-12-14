export default class Layout {
  constructor() {
    this.body = document.querySelector('body');
  }

  showLayout() {
    this.body.appendChild(this.createContentContainer());
    this.body.appendChild(this.createLoader());
  }

  createContentContainer() {
    const contentContainer = document.createElement('div');

    contentContainer.classList.add('content-container', 'content-container_blur');
    contentContainer.appendChild(this.createToolsContainer());
    contentContainer.appendChild(this.createMainContainer());

    return contentContainer;
  }

  createToolsContainer() {
    const toolsContainer = document.createElement('div');
    const controlContainer = document.createElement('div');
    const buttonRefreshBackgroundImage = document.createElement('button');
    const iconRefreshBackgroundImage = document.createElement('i');
    const languageButtonsContainer = document.createElement('div');
    const languageButtonEn = document.createElement('button');
    const languageButtonBe = document.createElement('button');
    const languageButtonRu = document.createElement('button');
    const temperatureButtonsContainer = document.createElement('div');
    const temperatureButtonFahrenheit = document.createElement('button');
    const temperatureButtonCelsius = document.createElement('button');
    const searchCityForm = document.createElement('form');
    const searchCityInput = document.createElement('input');
    const searchCityButton = document.createElement('button');

    toolsContainer.classList.add('tools-container');
    controlContainer.classList.add('control-container');
    buttonRefreshBackgroundImage.classList.add('button_refresh-background-image');
    buttonRefreshBackgroundImage.type = 'button';
    iconRefreshBackgroundImage.classList.add('icon_refresh-background-image');
    languageButtonsContainer.classList.add('language-buttons-container');
    languageButtonEn.classList.add('language-button', 'language-button_en');
    languageButtonEn.type = 'button';
    languageButtonEn.textContent = 'EN';
    languageButtonBe.classList.add('language-button', 'language-button_be');
    languageButtonBe.type = 'button';
    languageButtonBe.textContent = 'BE';
    languageButtonRu.classList.add('language-button', 'language-button_ru');
    languageButtonRu.type = 'button';
    languageButtonRu.textContent = 'RU';
    temperatureButtonsContainer.classList.add('temperature-buttons-container');
    temperatureButtonFahrenheit.classList.add('temperature-button', 'temperature-button_fahrenheit');
    temperatureButtonFahrenheit.type = 'button';
    temperatureButtonFahrenheit.setAttribute('data-unit', 'fahrenheit');
    temperatureButtonFahrenheit.textContent = '°F';
    temperatureButtonCelsius.classList.add('temperature-button', 'temperature-button_celsius');
    temperatureButtonCelsius.type = 'button';
    temperatureButtonCelsius.setAttribute('data-unit', 'celsius');
    temperatureButtonCelsius.textContent = '°С';
    searchCityForm.classList.add('search-city-form');
    searchCityInput.id = 'search-city-input';
    searchCityInput.type = 'text';
    searchCityInput.name = 'city';
    searchCityButton.classList.add('search-city-button');
    searchCityButton.type = 'submit';

    toolsContainer.appendChild(controlContainer);
    controlContainer.appendChild(buttonRefreshBackgroundImage);
    buttonRefreshBackgroundImage.appendChild(iconRefreshBackgroundImage);
    controlContainer.appendChild(languageButtonsContainer);
    languageButtonsContainer.appendChild(languageButtonEn);
    languageButtonsContainer.appendChild(languageButtonBe);
    languageButtonsContainer.appendChild(languageButtonRu);
    controlContainer.appendChild(temperatureButtonsContainer);
    temperatureButtonsContainer.appendChild(temperatureButtonFahrenheit);
    temperatureButtonsContainer.appendChild(temperatureButtonCelsius);
    toolsContainer.appendChild(searchCityForm);
    searchCityForm.appendChild(searchCityInput);
    searchCityForm.appendChild(searchCityButton);

    return toolsContainer;
  }

  createMainContainer() {
    const mainContainer = document.createElement('div');
    const currentWeatherContainer = document.createElement('div');
    const currentWeatherTemperature = document.createElement('span');
    const locationName = document.createElement('span');
    const currentDateContainer = document.createElement('div');
    const currentDate = document.createElement('span');
    const currentTime = document.createElement('span');
    const descriptionCurrentWeatherContainer = document.createElement('div');
    const currentWeatherStatusIcon = document.createElement('i');
    const currentWeatherDataContainer = document.createElement('div');
    const currentWeatherStatus = document.createElement('span');
    const currentWeatherFeel = document.createElement('span');
    const currentWeatherWind = document.createElement('span');
    const currentWeatherHumidity = document.createElement('span');
    const coordinatesContainer = document.createElement('div');
    const coordinateLatitude = document.createElement('span');
    const coordinateLongitude = document.createElement('span');
    const threeDayWeatherContainer = document.createElement('div');
    const firstDayWeatherContainer = document.createElement('div');
    const firstDayWeatherIconStatus = document.createElement('i');
    const firstDayWeatherTemperature = document.createElement('span');
    const firstDayWeatherWeekdayName = document.createElement('span');
    const secondDayWeatherContainer = document.createElement('div');
    const secondDayWeatherIconStatus = document.createElement('i');
    const secondDayWeatherTemperature = document.createElement('span');
    const secondDayWeatherWeekdayName = document.createElement('span');
    const thirdDayWeatherContainer = document.createElement('div');
    const thirdDayWeatherIconStatus = document.createElement('i');
    const thirdDayWeatherTemperature = document.createElement('span');
    const thirdDayWeatherWeekdayName = document.createElement('span');
    const mapContainer = document.createElement('div');

    mainContainer.classList.add('main-container');
    currentWeatherContainer.classList.add('current-weather-container');
    currentWeatherTemperature.classList.add('current-weather-temperature');
    locationName.classList.add('location-name');
    currentDateContainer.classList.add('current-date-container');
    currentDate.classList.add('current-date');
    currentTime.classList.add('current-time');
    descriptionCurrentWeatherContainer.classList.add('description-current-weather-container');
    currentWeatherStatusIcon.classList.add('current-weather_status-icon');
    currentWeatherDataContainer.classList.add('current-weather-data-container');
    currentWeatherStatus.classList.add('current-weather', 'current-weather_status');
    currentWeatherFeel.classList.add('current-weather', 'current-weather_feel');
    currentWeatherWind.classList.add('current-weather', 'current-weather_wind');
    currentWeatherHumidity.classList.add('current-weather', 'current-weather_humidity');
    coordinatesContainer.classList.add('coordinates-container');
    coordinateLatitude.classList.add('coordinate', 'coordinate_latitude');
    coordinateLongitude.classList.add('coordinate', 'coordinate_longitude');
    threeDayWeatherContainer.classList.add('three-day-weather-container');
    firstDayWeatherContainer.classList.add('future-weather-container', 'first-day-weather-container');
    firstDayWeatherIconStatus.classList.add('future-weather_icon-status', 'first-day-weather_icon-status');
    firstDayWeatherTemperature.classList.add('future-weather_temperature', 'first-day-weather_temperature');
    firstDayWeatherWeekdayName.classList.add('future-weather_weekday-name', 'first-day-weather_weekday-name');
    secondDayWeatherContainer.classList.add('future-weather-container', 'second-day-weather-container');
    secondDayWeatherIconStatus.classList.add('future-weather_icon-status', 'second-day-weather_icon-status');
    secondDayWeatherTemperature.classList.add('future-weather_temperature', 'second-day-weather_temperature');
    secondDayWeatherWeekdayName.classList.add('future-weather_weekday-name', 'second-day-weather_weekday-name');
    thirdDayWeatherContainer.classList.add('future-weather-container', 'third-day-weather-container');
    thirdDayWeatherIconStatus.classList.add('future-weather_icon-status', 'third-day-weather_icon-status');
    thirdDayWeatherTemperature.classList.add('future-weather_temperature', 'third-day-weather_temperature');
    thirdDayWeatherWeekdayName.classList.add('future-weather_weekday-name', 'third-day-weather_weekday-name');
    mapContainer.id = 'map-container';

    mainContainer.appendChild(currentWeatherContainer);
    currentWeatherContainer.appendChild(currentWeatherTemperature);
    currentWeatherContainer.appendChild(locationName);
    currentWeatherContainer.appendChild(currentDateContainer);
    currentDateContainer.appendChild(currentDate);
    currentDateContainer.appendChild(currentTime);
    mainContainer.appendChild(descriptionCurrentWeatherContainer);
    descriptionCurrentWeatherContainer.appendChild(currentWeatherStatusIcon);
    descriptionCurrentWeatherContainer.appendChild(currentWeatherDataContainer);
    currentWeatherDataContainer.appendChild(currentWeatherStatus);
    currentWeatherDataContainer.appendChild(currentWeatherFeel);
    currentWeatherDataContainer.appendChild(currentWeatherWind);
    currentWeatherDataContainer.appendChild(currentWeatherHumidity);
    descriptionCurrentWeatherContainer.appendChild(coordinatesContainer);
    coordinatesContainer.appendChild(coordinateLatitude);
    coordinatesContainer.appendChild(coordinateLongitude);
    mainContainer.appendChild(threeDayWeatherContainer);
    threeDayWeatherContainer.appendChild(firstDayWeatherContainer);
    firstDayWeatherContainer.appendChild(firstDayWeatherIconStatus);
    firstDayWeatherContainer.appendChild(firstDayWeatherTemperature);
    firstDayWeatherContainer.appendChild(firstDayWeatherWeekdayName);
    threeDayWeatherContainer.appendChild(secondDayWeatherContainer);
    secondDayWeatherContainer.appendChild(secondDayWeatherIconStatus);
    secondDayWeatherContainer.appendChild(secondDayWeatherTemperature);
    secondDayWeatherContainer.appendChild(secondDayWeatherWeekdayName);
    threeDayWeatherContainer.appendChild(thirdDayWeatherContainer);
    thirdDayWeatherContainer.appendChild(thirdDayWeatherIconStatus);
    thirdDayWeatherContainer.appendChild(thirdDayWeatherTemperature);
    thirdDayWeatherContainer.appendChild(thirdDayWeatherWeekdayName);
    mainContainer.appendChild(mapContainer);

    return mainContainer;
  }

  createLoader() {
    const loader = document.createElement('div');
    const ldsSpinner = document.createElement('div');
    const arrayOfNamelessDivs = [];

    for (let i = 0; i < 12; i += 1) {
      arrayOfNamelessDivs.push(document.createElement('div'));
    }

    loader.classList.add('loader');
    ldsSpinner.classList.add('lds-spinner');

    loader.appendChild(ldsSpinner);

    arrayOfNamelessDivs.forEach(div => {
      ldsSpinner.appendChild(div);
    });

    return loader;
  }
}
