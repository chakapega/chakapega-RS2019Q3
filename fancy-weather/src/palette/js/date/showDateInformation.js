export default class ShowDateInformation {
  constructor(store) {
    this.store = store;
    this.currentDate = document.querySelector('.current-date');
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
    } = this.defineDatesValues();
    const { number } = this.store.currentDate;

    this.currentDate.textContent = `${currentDate} ${number}`;
    this.firstDayWeatherWeekdayName.textContent = firstDayWeatherWeekdayName;
    this.secondDayWeatherWeekdayName.textContent = secondDayWeatherWeekdayName;
    this.thirdDayWeatherWeekdayName.textContent = thirdDayWeatherWeekdayName;
  }

  defineDatesValues() {
    const { dayOfTheWeek } = this.store.currentDate;
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    const datesValues = {};

    switch (dayOfTheWeek) {
      case 'Mon':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Monday';
            datesValues.firstDayWeatherWeekdayName = 'Tuesday';
            datesValues.secondDayWeatherWeekdayName = 'Wednesday';
            datesValues.thirdDayWeatherWeekdayName = 'Thursday';
            break;
          case 'BE':
            datesValues.currentDate = 'Панядзелак';
            datesValues.firstDayWeatherWeekdayName = 'Аўторак';
            datesValues.secondDayWeatherWeekdayName = 'Серада';
            datesValues.thirdDayWeatherWeekdayName = 'Чацьвер';
            break;
          case 'RU':
            datesValues.currentDate = 'Понедельник';
            datesValues.firstDayWeatherWeekdayName = 'Вторник';
            datesValues.secondDayWeatherWeekdayName = 'Среда';
            datesValues.thirdDayWeatherWeekdayName = 'Четверг';
            break;
          default:
            break;
        }
        break;
      case 'Tue':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Tuesday';
            datesValues.firstDayWeatherWeekdayName = 'Wednesday';
            datesValues.secondDayWeatherWeekdayName = 'Thursday';
            datesValues.thirdDayWeatherWeekdayName = 'Friday';
            break;
          case 'BE':
            datesValues.currentDate = 'Аўторак';
            datesValues.firstDayWeatherWeekdayName = 'Серада';
            datesValues.secondDayWeatherWeekdayName = 'Чацьвер';
            datesValues.thirdDayWeatherWeekdayName = 'Пятніца';
            break;
          case 'RU':
            datesValues.currentDate = 'Вторник';
            datesValues.firstDayWeatherWeekdayName = 'Среда';
            datesValues.secondDayWeatherWeekdayName = 'Четверг';
            datesValues.thirdDayWeatherWeekdayName = 'Пятница';
            break;
          default:
            break;
        }
        break;
      case 'Wed':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Wednesday';
            datesValues.firstDayWeatherWeekdayName = 'Thursday';
            datesValues.secondDayWeatherWeekdayName = 'Friday';
            datesValues.thirdDayWeatherWeekdayName = 'Saturday';
            break;
          case 'BE':
            datesValues.currentDate = 'Серада';
            datesValues.firstDayWeatherWeekdayName = 'Чацьвер';
            datesValues.secondDayWeatherWeekdayName = 'Пятніца';
            datesValues.thirdDayWeatherWeekdayName = 'Субота';
            break;
          case 'RU':
            datesValues.currentDate = 'Среда';
            datesValues.firstDayWeatherWeekdayName = 'Четверг';
            datesValues.secondDayWeatherWeekdayName = 'Пятница';
            datesValues.thirdDayWeatherWeekdayName = 'Суббота';
            break;
          default:
            break;
        }
        break;
      case 'Thu':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Thursday';
            datesValues.firstDayWeatherWeekdayName = 'Friday';
            datesValues.secondDayWeatherWeekdayName = 'Saturday';
            datesValues.thirdDayWeatherWeekdayName = 'Sunday';
            break;
          case 'BE':
            datesValues.currentDate = 'Чацьвер';
            datesValues.firstDayWeatherWeekdayName = 'Пятніца';
            datesValues.secondDayWeatherWeekdayName = 'Субота';
            datesValues.thirdDayWeatherWeekdayName = 'Нядзеля';
            break;
          case 'RU':
            datesValues.currentDate = 'Четверг';
            datesValues.firstDayWeatherWeekdayName = 'Пятница';
            datesValues.secondDayWeatherWeekdayName = 'Суббота';
            datesValues.thirdDayWeatherWeekdayName = 'Воскресенье';
            break;
          default:
            break;
        }
        break;
      case 'Fri':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Friday';
            datesValues.firstDayWeatherWeekdayName = 'Saturday';
            datesValues.secondDayWeatherWeekdayName = 'Sunday';
            datesValues.thirdDayWeatherWeekdayName = 'Monday';
            break;
          case 'BE':
            datesValues.currentDate = 'Пятніца';
            datesValues.firstDayWeatherWeekdayName = 'Субота';
            datesValues.secondDayWeatherWeekdayName = 'Нядзеля';
            datesValues.thirdDayWeatherWeekdayName = 'Панядзелак';
            break;
          case 'RU':
            datesValues.currentDate = 'Пятница';
            datesValues.firstDayWeatherWeekdayName = 'Суббота';
            datesValues.secondDayWeatherWeekdayName = 'Воскресенье';
            datesValues.thirdDayWeatherWeekdayName = 'Понедельник';
            break;
          default:
            break;
        }
        break;
      case 'Sat':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Saturday';
            datesValues.firstDayWeatherWeekdayName = 'Sunday';
            datesValues.secondDayWeatherWeekdayName = 'Monday';
            datesValues.thirdDayWeatherWeekdayName = 'Tuesday';
            break;
          case 'BE':
            datesValues.currentDate = 'Субота';
            datesValues.firstDayWeatherWeekdayName = 'Нядзеля';
            datesValues.secondDayWeatherWeekdayName = 'Панядзелак';
            datesValues.thirdDayWeatherWeekdayName = 'Аўторак';
            break;
          case 'RU':
            datesValues.currentDate = 'Суббота';
            datesValues.firstDayWeatherWeekdayName = 'Воскресенье';
            datesValues.secondDayWeatherWeekdayName = 'Понедельник';
            datesValues.thirdDayWeatherWeekdayName = 'Вторник';
            break;
          default:
            break;
        }
        break;
      case 'Sun':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.currentDate = 'Sunday';
            datesValues.firstDayWeatherWeekdayName = 'Monday';
            datesValues.secondDayWeatherWeekdayName = 'Tuesday';
            datesValues.thirdDayWeatherWeekdayName = 'Wednesday';
            break;
          case 'BE':
            datesValues.currentDate = 'Нядзеля';
            datesValues.firstDayWeatherWeekdayName = 'Панядзелак';
            datesValues.secondDayWeatherWeekdayName = 'Аўторак';
            datesValues.thirdDayWeatherWeekdayName = 'Серада';
            break;
          case 'RU':
            datesValues.currentDate = 'Воскресенье';
            datesValues.firstDayWeatherWeekdayName = 'Понедельник';
            datesValues.secondDayWeatherWeekdayName = 'Вторник';
            datesValues.thirdDayWeatherWeekdayName = 'Среда';
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }

    return datesValues;
  }
}
