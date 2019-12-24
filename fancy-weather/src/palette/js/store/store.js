export const DAYS_OF_THE_WEEK = [
  { en: 'Monday', be: 'Панядзелак', ru: 'Понедельник' },
  { en: 'Tuesday', be: 'Аўторак', ru: 'Вторник' },
  { en: 'Wednesday', be: 'Серада', ru: 'Среда' },
  { en: 'Thursday', be: 'Чацвер', ru: 'Четверг' },
  { en: 'Friday', be: 'Пятніца', ru: 'Пятница' },
  { en: 'Saturday', be: 'Субота', ru: 'Суббота' },
  { en: 'Sunday', be: 'Нядзеля', ru: 'Воскресенье' },
];
export const MONTHS_OF_THE_YEAR = [
  { en: 'January', be: 'Студзень', ru: 'Январь' },
  { en: 'February', be: 'Люты', ru: 'Февраль' },
  { en: 'March', be: 'Сакавiк', ru: 'Март' },
  { en: 'April', be: 'Красавiк', ru: 'Апрель' },
  { en: 'May', be: 'Май', ru: 'Май' },
  { en: 'June', be: 'Червень', ru: 'Июнь' },
  { en: 'July', be: 'Лiпень', ru: 'Июль' },
  { en: 'August', be: 'Жнiвень', ru: 'Август' },
  { en: 'September', be: 'Верасень', ru: 'Сентябрь' },
  { en: 'October', be: 'Кастрычнiк', ru: 'Октябрь' },
  { en: 'November', be: 'Лiстапад', ru: 'Ноябрь' },
  { en: 'December', be: 'Снежань', ru: 'Декабрь' },
];
export const TEXT_WEATHER_PROPERTIES = [
  { en: 'Feels like', be: 'Адчуваецца як', ru: 'Чувствуется как' },
  { en: 'Wind', be: 'Вецер', ru: 'Ветер' },
  { en: 'Humidity', be: 'Вільготнасць', ru: 'Влажность' },
];
export const SEARCH_CITY_FORM_TEXT = [
  { en: 'Search city', be: 'Пошук горада', ru: 'Поиск города' },
  { en: 'SEARCH', be: 'ПОШУК', ru: 'ПОИСК' },
];
export const apiIpinfoUrl = 'https://ipinfo.io/json?token=';
export const apiIpinfoKey = '5654748bdd39be';
export const apiOpencagedataUrl = 'https://api.opencagedata.com/geocode/v1/json?key=';
export const apiOpencagedataKey = '149fe1a58fc04f3e9b9eda06ed471077';
export const apiDarkskyUrl = 'https://api.darksky.net/forecast/';
export const apiDarkskyKey = '11e8ea62cae2009dabda1b337346ca8d/';
export const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
export const apiFlickrUrl =
  'https://www.flickr.com/services/rest/?method=flickr.photos.search&nojsoncallback=1&format=json&api_key=';
export const apiFlickrKey = '55ceacde1751d29fb1d2e44ba8663949';
export const statusOk = 'ok';
export const statusError = 'error';

export class Store {
  constructor() {
    this.currentDate = {};
    this.currentPosition = {};
    this.locationInformation = {};
    this.weatherForecast = {};
  }
}
