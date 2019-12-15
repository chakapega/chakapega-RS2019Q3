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
    switch (localStorage.getItem('selectedLanguage')) {
      case 'EN':
        this.searchCityInput.placeholder = 'Search city';
        this.searchCityButton.textContent = 'SEARCH';
        break;
      case 'BE':
        this.searchCityInput.placeholder = 'Пошук горада';
        this.searchCityButton.textContent = 'ПОШУК';
        break;
      case 'RU':
        this.searchCityInput.placeholder = 'Поиск города';
        this.searchCityButton.textContent = 'ПОИСК';
        break;
      default:
        break;
    }
  }
}
