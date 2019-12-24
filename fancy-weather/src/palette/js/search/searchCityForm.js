import { SEARCH_CITY_FORM_TEXT } from '../store/store';

export default class SearchCityForm {
  constructor(store) {
    this.store = store;
    this.observers = [];
    this.searchCityForm = document.querySelector('.search-city-form');
    this.searchCityInput = document.querySelector('#search-city-input');
    this.searchCityButton = document.querySelector('.search-city-button');
    this.changeLanguage();
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addSubmitHandler() {
    this.searchCityForm.addEventListener('submit', event => {
      event.preventDefault();

      const city = event.target.city.value;
      this.store.city = city;

      if (city.length < 2) {
        this.broadcast('error');
      } else {
        this.broadcast(city);
      }
    });
  }

  changeLanguage() {
    const language = localStorage.getItem('selectedLanguage');

    this.searchCityInput.placeholder = SEARCH_CITY_FORM_TEXT[0][language];
    this.searchCityButton.textContent = SEARCH_CITY_FORM_TEXT[1][language];
  }
}
