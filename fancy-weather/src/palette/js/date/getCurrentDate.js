export default class GetCurrentDate {
  constructor(store) {
    this.store = store;
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  getCurrentDate() {
    [
      this.store.currentDate.dayOfTheWeek,
      this.store.currentDate.month,
      this.store.currentDate.number,
      this.store.currentDate.year,
      this.store.currentDate.time,
    ] = Date().split(' ');

    this.broadcast();
  }
}
