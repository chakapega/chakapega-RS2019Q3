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
    this.currentTime.textContent = time.slice(0, 5);
    this.firstDayWeatherWeekdayName.textContent = firstDayWeatherWeekdayName;
    this.secondDayWeatherWeekdayName.textContent = secondDayWeatherWeekdayName;
    this.thirdDayWeatherWeekdayName.textContent = thirdDayWeatherWeekdayName;
  }

  defineDatesValues() {
    const { dayOfTheWeek, month } = this.store.currentDate;
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

    switch (month) {
      case 'Jan':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'January';
            break;
          case 'BE':
            datesValues.month = 'Студзень';
            break;
          case 'RU':
            datesValues.month = 'Январь';
            break;
          default:
            break;
        }
        break;
      case 'Feb':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'February';
            break;
          case 'BE':
            datesValues.month = 'Люты';
            break;
          case 'RU':
            datesValues.month = 'Февраль';
            break;
          default:
            break;
        }
        break;
      case 'Mar':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'March';
            break;
          case 'BE':
            datesValues.month = 'Сакавiк';
            break;
          case 'RU':
            datesValues.month = 'Март';
            break;
          default:
            break;
        }
        break;
      case 'Apr':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'April';
            break;
          case 'BE':
            datesValues.month = 'Красавiк';
            break;
          case 'RU':
            datesValues.month = 'Апрель';
            break;
          default:
            break;
        }
        break;
      case 'May':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'May';
            break;
          case 'BE':
            datesValues.month = 'Май';
            break;
          case 'RU':
            datesValues.month = 'Май';
            break;
          default:
            break;
        }
        break;
      case 'Jun':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'June';
            break;
          case 'BE':
            datesValues.month = 'Червень';
            break;
          case 'RU':
            datesValues.month = 'Июнь';
            break;
          default:
            break;
        }
        break;
      case 'Jul':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'July';
            break;
          case 'BE':
            datesValues.month = 'Лiпень';
            break;
          case 'RU':
            datesValues.month = 'Июль';
            break;
          default:
            break;
        }
        break;
      case 'Aug':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'August';
            break;
          case 'BE':
            datesValues.month = 'Жнiвень';
            break;
          case 'RU':
            datesValues.month = 'Август';
            break;
          default:
            break;
        }
        break;
      case 'Sep':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'September';
            break;
          case 'BE':
            datesValues.month = 'Верасень';
            break;
          case 'RU':
            datesValues.month = 'Сентябрь';
            break;
          default:
            break;
        }
        break;
      case 'Oct':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'October';
            break;
          case 'BE':
            datesValues.month = 'Кастрычнiк';
            break;
          case 'RU':
            datesValues.month = 'Октябрь';
            break;
          default:
            break;
        }
        break;
      case 'Nov':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'November';
            break;
          case 'BE':
            datesValues.month = 'Лiстапад';
            break;
          case 'RU':
            datesValues.month = 'Ноябрь';
            break;
          default:
            break;
        }
        break;
      case 'Dec':
        switch (selectedLanguage) {
          case 'EN':
            datesValues.month = 'December';
            break;
          case 'BE':
            datesValues.month = 'Снежань';
            break;
          case 'RU':
            datesValues.month = 'Декабрь';
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
