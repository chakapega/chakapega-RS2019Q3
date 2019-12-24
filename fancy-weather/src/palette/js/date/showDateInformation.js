import { DAYS_OF_THE_WEEK, MONTHS_OF_THE_YEAR } from '../store/store';

export default class ShowDateInformation {
  constructor(store) {
    this.store = store;
    this.currentDate = document.querySelector('.current-date');
    this.currentTime = document.querySelector('.current-time');
    this.firstDayWeatherWeekdayName = document.querySelector('.first-day-weather_weekday-name');
    this.secondDayWeatherWeekdayName = document.querySelector('.second-day-weather_weekday-name');
    this.thirdDayWeatherWeekdayName = document.querySelector('.third-day-weather_weekday-name');
  }

  showDateInformation() {
    const {
      currentDate,
      firstDayWeatherWeekdayName,
      secondDayWeatherWeekdayName,
      thirdDayWeatherWeekdayName,
      month,
    } = this.defineDatesValues();
    const { number, time } = this.store.currentDate;

    this.currentDate.textContent = `${currentDate} ${parseInt(number, 10)} ${month}`;
    this.currentTime.textContent = time;
    this.firstDayWeatherWeekdayName.textContent = firstDayWeatherWeekdayName;
    this.secondDayWeatherWeekdayName.textContent = secondDayWeatherWeekdayName;
    this.thirdDayWeatherWeekdayName.textContent = thirdDayWeatherWeekdayName;
  }

  defineDatesValues() {
    const { dayOfTheWeek, month } = this.store.currentDate;
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    const datesValues = {};

    datesValues.currentDate = DAYS_OF_THE_WEEK[dayOfTheWeek][selectedLanguage];
    datesValues.firstDayWeatherWeekdayName =
      DAYS_OF_THE_WEEK[dayOfTheWeek + 1 > 6 ? 0 : dayOfTheWeek + 1][selectedLanguage];
    datesValues.secondDayWeatherWeekdayName =
      DAYS_OF_THE_WEEK[dayOfTheWeek + 2 > 6 ? 1 : dayOfTheWeek + 2][selectedLanguage];
    datesValues.thirdDayWeatherWeekdayName =
      DAYS_OF_THE_WEEK[dayOfTheWeek + 3 > 6 ? 2 : dayOfTheWeek + 3][selectedLanguage];

    datesValues.month = MONTHS_OF_THE_YEAR[month][selectedLanguage];

    return datesValues;
  }
}
