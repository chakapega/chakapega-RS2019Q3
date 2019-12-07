export default class WeatherContainer {
  constructor(store) {
    this.store = store;
    this.locationName = document.querySelector('.location-name');
    this.currentWeatherTemperature = document.querySelector('.current-weather-temperature');
    this.currentWeatherStatus = document.querySelector('.current-weather_status');
    this.currentWeatherFeel = document.querySelector('.current-weather_feel');
    this.currentWeatherWind = document.querySelector('.current-weather_wind');
    this.currentWeatherHumidity = document.querySelector('.current-weather_humidity');
  }

  showWeather() {
    const weatherPropertiesText = this.defineTextWeatherProperties();

    this.locationName.textContent = this.store.weatherForecast.timezone;
    this.currentWeatherTemperature.textContent = weatherPropertiesText.temperature;
    this.currentWeatherStatus.textContent = this.store.weatherForecast.currently.summary;
    this.currentWeatherFeel.textContent = weatherPropertiesText.feel;
    this.currentWeatherWind.textContent = weatherPropertiesText.wind;
    this.currentWeatherHumidity.textContent = weatherPropertiesText.humidity;
  }

  defineTextWeatherProperties() {
    const weatherPropertiesText = {};

    switch (localStorage.getItem('selectedTemperatureUnit')) {
      case 'celsius':
        weatherPropertiesText.temperature = `${this.store.weatherForecast.currently.temperature.toFixed()}°`;
        weatherPropertiesText.feel = this.store.weatherForecast.currently.apparentTemperature.toFixed();
        break;
      case 'fahrenheit':
        weatherPropertiesText.temperature = `${(this.store.weatherForecast.currently.temperature * (9 / 5) + 32).toFixed()}°`;
        weatherPropertiesText.feel = (this.store.weatherForecast.currently.apparentTemperature * (9 / 5) + 32).toFixed();
        break;

      default:
        break;
    }

    switch (localStorage.getItem('selectedLanguage')) {
      case 'EN':
        weatherPropertiesText.feel = `FEELS LIKE: ${weatherPropertiesText.feel}°`;
        weatherPropertiesText.wind = `WIND: ${this.store.weatherForecast.currently.windSpeed}m/s`;
        weatherPropertiesText.humidity = `HUMIDITY: ${this.store.weatherForecast.currently.humidity * 100}%`;
        break;
      case 'BE':
        weatherPropertiesText.feel = `Адчуваецца як: ${weatherPropertiesText.feel}°`;
        weatherPropertiesText.wind = `Вецер: ${this.store.weatherForecast.currently.windSpeed}м/с`;
        weatherPropertiesText.humidity = `Вільготнасць: ${this.store.weatherForecast.currently.humidity * 100}%`;
        break;
      case 'RU':
        weatherPropertiesText.feel = `Чувствуется как: ${weatherPropertiesText.feel}°`;
        weatherPropertiesText.wind = `Ветер: ${this.store.weatherForecast.currently.windSpeed}м/с`;
        weatherPropertiesText.humidity = `Влажность: ${this.store.weatherForecast.currently.humidity * 100}%`;
        break;

      default:
        break;
    }

    return weatherPropertiesText;
  }
}
