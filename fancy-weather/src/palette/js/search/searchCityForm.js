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

      this.store.city = event.target.city.value;
      this.broadcast(event.target.city.value);
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
