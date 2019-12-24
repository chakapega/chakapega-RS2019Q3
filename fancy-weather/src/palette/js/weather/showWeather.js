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
    const { weatherForecast } = this.store;

    this.currentWeatherTemperature.textContent = weatherPropertiesText.temperature;
    this.currentWeatherStatusIcon.classList.add(`weather-icon_${weatherForecast.currently.icon}`);
    this.currentWeatherStatus.textContent = weatherForecast.currently.summary;
    this.currentWeatherFeel.textContent = weatherPropertiesText.feel;
    this.currentWeatherWind.textContent = weatherPropertiesText.wind;
    this.currentWeatherHumidity.textContent = weatherPropertiesText.humidity;
    this.firstDayWeatherTemperature.textContent = weatherPropertiesText.firstDayTemperature;
    this.secondDayWeatherTemperature.textContent = weatherPropertiesText.secondDayTemperature;
    this.thirdDayWeatherTemperature.textContent = weatherPropertiesText.thirdDayTemperature;
    this.firstDayWeatherIconStatus.classList.add(`weather-icon_${weatherForecast.daily.data[0].icon}`);
    this.secondDayWeatherIconStatus.classList.add(`weather-icon_${weatherForecast.daily.data[1].icon}`);
    this.thirdDayWeatherIconStatus.classList.add(`weather-icon_${weatherForecast.daily.data[2].icon}`);
  }

  defineTextWeatherProperties() {
    const weatherPropertiesText = {};
    const { weatherForecast } = this.store;
    const language = localStorage.getItem('selectedLanguage');

    switch (localStorage.getItem('selectedTemperatureUnit')) {
      case 'celsius':
        weatherPropertiesText.temperature = `${weatherForecast.currently.temperature.toFixed()}°`;
        weatherPropertiesText.feel = `${weatherForecast.currently.apparentTemperature.toFixed()}°`;
        weatherPropertiesText.firstDayTemperature = `${(
          (weatherForecast.daily.data[0].temperatureMax + weatherForecast.daily.data[0].temperatureMin) /
          2
        ).toFixed()}°`;
        weatherPropertiesText.secondDayTemperature = `${(
          (weatherForecast.daily.data[1].temperatureMax + weatherForecast.daily.data[1].temperatureMin) /
          2
        ).toFixed()}°`;
        weatherPropertiesText.thirdDayTemperature = `${(
          (weatherForecast.daily.data[2].temperatureMax + weatherForecast.daily.data[2].temperatureMin) /
          2
        ).toFixed()}°`;
        break;
      case 'fahrenheit':
        weatherPropertiesText.temperature = `${(weatherForecast.currently.temperature * (9 / 5) + 32).toFixed()}°`;
        weatherPropertiesText.feel = `${(weatherForecast.currently.apparentTemperature * (9 / 5) + 32).toFixed()}°`;
        weatherPropertiesText.firstDayTemperature = `${(
          ((weatherForecast.daily.data[0].temperatureMax + weatherForecast.daily.data[0].temperatureMin) / 2) *
            (9 / 5) +
          32
        ).toFixed()}°`;
        weatherPropertiesText.secondDayTemperature = `${(
          ((weatherForecast.daily.data[1].temperatureMax + weatherForecast.daily.data[1].temperatureMin) / 2) *
            (9 / 5) +
          32
        ).toFixed()}°`;
        weatherPropertiesText.thirdDayTemperature = `${(
          ((weatherForecast.daily.data[2].temperatureMax + weatherForecast.daily.data[2].temperatureMin) / 2) *
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
    weatherPropertiesText.wind = `${TEXT_WEATHER_PROPERTIES[1][language]} ${weatherForecast.currently.windSpeed}m/s`;
    weatherPropertiesText.humidity = `${TEXT_WEATHER_PROPERTIES[2][language]} ${(
      weatherForecast.currently.humidity * 100
    ).toFixed()}%`;

    return weatherPropertiesText;
  }
}
