export default class Store {
  constructor() {
    this.apiIpinfoUrl = 'https://ipinfo.io/json?token=';
    this.apiIpinfoKey = '5654748bdd39be';
    this.apiOpencagedataUrl = 'https://api.opencagedata.com/geocode/v1/json?key=';
    this.apiOpencagedataKey = '149fe1a58fc04f3e9b9eda06ed471077';
    this.apiDarkskyUrl = 'https://api.darksky.net/forecast/';
    this.apiDarkskyKey = '11e8ea62cae2009dabda1b337346ca8d/';
    this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    this.currentDate = {};
    this.currentPosition = {};
    this.locationInformation = {};
    this.weatherForecast= {};
  }
}
