export default class Layout {
  constructor() {
    this.body = document.querySelector('body');
  }

  showLayout() {
    this.body.innerHTML = this.createLayout();
  }

  createLayout() {
    return `
      <div class="tools-container">
        <div class="control-container">
          <button class="button_refresh-background-image" type="button">
            <i class="icon_refresh-background-image"></i>
          </button>
          <div class="language-buttons-container">
            <button class="language-button language-button_en" type="button">EN</button>
            <button class="language-button language-button_be" type="button">BE</button>
            <button class="language-button language-button_ru" type="button">RU</button>
          </div>
          <div class="temperature-buttons-container">
            <button class="temperature-button temperature-button_fahrenheit" type="button"
              data-unit="fahrenheit">°F</button>
            <button class="temperature-button temperature-button_celsius" type="button" data-unit="celsius">°С</button>
          </div>
        </div>
        <form class="search-city-form">
          <input id="search-city-input" placeholder="Search city" type="text" name="city">
          <button class="search-city-button" type="submit">SEARCH</button>
        </form>
      </div>
      <div class="main-container">
        <div class="current-weather-container">
          <span class="current-weather-temperature"></span>
          <span class="location-name"></span>
          <div class="current-date-container">
            <span class="current-date"></span>
            <span class="current-time"></span>
          </div>
        </div>
        <div class="description-current-weather-container">
          <i class="current-weather_status-icon"></i>
          <div class="current-weather-data-container">
            <span class="current-weather current-weather_status"></span>
            <span class="current-weather current-weather_feel"></span>
            <span class="current-weather current-weather_wind"></span>
            <span class="current-weather current-weather_humidity"></span>
          </div>
          <div class="coordinates-container">
            <span class="coordinate coordinate_latitude"></span>
            <span class="coordinate coordinate_longitude"></span>
          </div>
        </div>
        <div class="three-day-weather-container">
          <div class="future-weather-container first-day-weather-container">
            <i class="future-weather_icon-status first-day-weather_icon-status"></i>
            <span class="future-weather_temperature first-day-weather_temperature"></span>
            <span class="future-weather_weekday-name first-day-weather_weekday-name"></span>
          </div>
          <div class="future-weather-container second-day-weather-container">
            <i class="future-weather_icon-status second-day-weather_icon-status"></i>
            <span class="future-weather_temperature second-day-weather_temperature"></span>
            <span class="future-weather_weekday-name second-day-weather_weekday-name"></span>
          </div>
          <div class="future-weather-container third-day-weather-container">
            <i class="future-weather_icon-status third-day-weather_icon-status"></i>
            <span class="future-weather_temperature third-day-weather_temperature"></span>
            <span class="future-weather_weekday-name third-day-weather_weekday-name"></span>
          </div>
        </div>
        <div id="map-container"></div>
      </div>
    `;
  }
}
