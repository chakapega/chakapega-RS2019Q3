export default class SearchCityForm {
  constructor(store) {
    this.store = store;
    this.observers = [];
    this.searchCityForm = document.querySelector('.search-city-form');
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
}
