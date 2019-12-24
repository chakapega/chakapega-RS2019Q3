import { TEXT_WEATHER_PROPERTIES } from '../store/store';

export default class ShowWeather {
  constructor(store) {
    this.store = store;
    this.currentWeatherTemperature = document.querySelector('.current-weather-temperature');
    this.currentWeatherStatus = document.querySelector('.current-weather_status');
    this.currentWeatherStatusIcon = document.querySelector('.current-weather_status-icon');
    this.currentWeatherFeel = document.querySelector('.current-weather_feel');
    this.currentWeatherWind = document.querySelector('.current-weather_wind');
    this.currentWeatherHumidity = document.querySelector('.current-weather_humidity');
    this.firstDayWeatherTemperature = document.querySelector('.first-day-weather_temperature');
    this.secondDayWeatherTemperature = document.querySelector('.second-day-weather_temperature');
    this.thirdDayWeatherTemperature = document.querySelector('.third-day-weather_temperature');
    this.firstDayWeatherIconStatus = document.querySelector('.first-day-weather_icon-status');
    this.secondDayWeatherIconStatus = document.querySelector('.second-day-weather_icon-status');
    this.thirdDayWeatherIconStatus = document.querySelector('.third-day-weather_icon-status');
  }

  showWeather() {
    const weatherPropertiesText = this.defineTextWeatherProperties();

    this.currentWeatherTemperature.textContent = weatherPropertiesText.temperature;
    this.currentWeatherStatusIcon.classList.add(`weather-icon_${this.store.weatherForecast.currently.icon}`);
    this.currentWeatherStatus.textContent = this.store.weatherForecast.currently.summary;
    this.currentWeatherFeel.textContent = weatherPropertiesText.feel;
    this.currentWeatherWind.textContent = weatherPropertiesText.wind;
    this.currentWeatherHumidity.textContent = weatherPropertiesText.humidity;
    this.firstDayWeatherTemperature.textContent = weatherPropertiesText.firstDayTemperature;
    this.secondDayWeatherTemperature.textContent = weatherPropertiesText.secondDayTemperature;
    this.thirdDayWeatherTemperature.textContent = weatherPropertiesText.thirdDayTemperature;
    this.firstDayWeatherIconStatus.classList.add(`weather-icon_${this.store.weatherForecast.daily.data[0].icon}`);
    this.secondDayWeatherIconStatus.classList.add(`weather-icon_${this.store.weatherForecast.daily.data[1].icon}`);
    this.thirdDayWeatherIconStatus.classList.add(`weather-icon_${this.store.weatherForecast.daily.data[2].icon}`);
  }

  defineTextWeatherProperties() {
    const weatherPropertiesText = {};
    const language = localStorage.getItem('selectedLanguage');

    switch (localStorage.getItem('selectedTemperatureUnit')) {
      case 'celsius':
        weatherPropertiesText.temperature = `${this.store.weatherForecast.currently.temperature.toFixed()}°`;
        weatherPropertiesText.feel = `${this.store.weatherForecast.currently.apparentTemperature.toFixed()}°`;
        weatherPropertiesText.firstDayTemperature = `${(
          (this.store.weatherForecast.daily.data[0].temperatureMax +
            this.store.weatherForecast.daily.data[0].temperatureMin) /
          2
        ).toFixed()}°`;
        weatherPropertiesText.secondDayTemperature = `${(
          (this.store.weatherForecast.daily.data[1].temperatureMax +
            this.store.weatherForecast.daily.data[1].temperatureMin) /
          2
        ).toFixed()}°`;
        weatherPropertiesText.thirdDayTemperature = `${(
          (this.store.weatherForecast.daily.data[2].temperatureMax +
            this.store.weatherForecast.daily.data[2].temperatureMin) /
          2
        ).toFixed()}°`;
        break;
      case 'fahrenheit':
        weatherPropertiesText.temperature = `${(
          this.store.weatherForecast.currently.temperature * (9 / 5) +
          32
        ).toFixed()}°`;
        weatherPropertiesText.feel = `${(
          this.store.weatherForecast.currently.apparentTemperature * (9 / 5) +
          32
        ).toFixed()}°`;
        weatherPropertiesText.firstDayTemperature = `${(
          ((this.store.weatherForecast.daily.data[0].temperatureMax +
            this.store.weatherForecast.daily.data[0].temperatureMin) /
            2) *
            (9 / 5) +
          32
        ).toFixed()}°`;
        weatherPropertiesText.secondDayTemperature = `${(
          ((this.store.weatherForecast.daily.data[1].temperatureMax +
            this.store.weatherForecast.daily.data[1].temperatureMin) /
            2) *
            (9 / 5) +
          32
        ).toFixed()}°`;
        weatherPropertiesText.thirdDayTemperature = `${(
          ((this.store.weatherForecast.daily.data[2].temperatureMax +
            this.store.weatherForecast.daily.data[2].temperatureMin) /
            2) *
            (9 / 5) +
          32
        ).toFixed()}°`;
        break;

      default:
        break;
    }

    if (weatherPropertiesText.temperature === '-0°') weatherPropertiesText.temperature = '0°';
    if (weatherPropertiesText.firstDayTemperature === '-0°') weatherPropertiesText.firstDayTemperature = '0°';
    if (weatherPropertiesText.secondDayTemperature === '-0°') weatherPropertiesText.secondDayTemperature = '0°';
    if (weatherPropertiesText.thirdDayTemperature === '-0°') weatherPropertiesText.thirdDayTemperature = '0°';
    if (weatherPropertiesText.feel === '-0°') weatherPropertiesText.feel = '0°';

    weatherPropertiesText.feel = `${TEXT_WEATHER_PROPERTIES[0][language]} ${weatherPropertiesText.feel}`;
    weatherPropertiesText.wind =
      `${TEXT_WEATHER_PROPERTIES[1][language]} ${this.store.weatherForecast.currently.windSpeed}m/s`;
    weatherPropertiesText.humidity = `${TEXT_WEATHER_PROPERTIES[2][language]} ${(
      this.store.weatherForecast.currently.humidity * 100
    ).toFixed()}%`;

    return weatherPropertiesText;
  }
}
