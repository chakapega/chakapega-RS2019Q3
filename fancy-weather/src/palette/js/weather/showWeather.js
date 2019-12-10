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

    switch (localStorage.getItem('selectedTemperatureUnit')) {
      case 'celsius':
        weatherPropertiesText.temperature = `${this.store.weatherForecast.currently.temperature.toFixed()}°`;
        weatherPropertiesText.feel = this.store.weatherForecast.currently.apparentTemperature.toFixed();
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
        weatherPropertiesText.feel = (
          this.store.weatherForecast.currently.apparentTemperature * (9 / 5) +
          32
        ).toFixed();
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

    switch (localStorage.getItem('selectedLanguage')) {
      case 'EN':
        weatherPropertiesText.feel = `Feels like ${weatherPropertiesText.feel}°`;
        weatherPropertiesText.wind = `Wind ${this.store.weatherForecast.currently.windSpeed}m/s`;
        weatherPropertiesText.humidity = `Humidity ${(this.store.weatherForecast.currently.humidity * 100).toFixed()}%`;
        break;
      case 'BE':
        weatherPropertiesText.feel = `Адчуваецца як ${weatherPropertiesText.feel}°`;
        weatherPropertiesText.wind = `Вецер: ${this.store.weatherForecast.currently.windSpeed}м/с`;
        weatherPropertiesText.humidity = `Вільготнасць ${(
          this.store.weatherForecast.currently.humidity * 100
        ).toFixed()}%`;
        break;
      case 'RU':
        weatherPropertiesText.feel = `Чувствуется как ${weatherPropertiesText.feel}°`;
        weatherPropertiesText.wind = `Ветер ${this.store.weatherForecast.currently.windSpeed}м/с`;
        weatherPropertiesText.humidity = `Влажность ${(
          this.store.weatherForecast.currently.humidity * 100
        ).toFixed()}%`;
        break;

      default:
        break;
    }

    return weatherPropertiesText;
  }
}
