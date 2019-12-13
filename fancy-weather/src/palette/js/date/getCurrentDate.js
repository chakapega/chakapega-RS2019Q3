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
    const { timezone } = this.store.locationInformation;
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
    };
    const currentDate = new Date().toLocaleString('en', options);
    [this.store.currentDate.dayOfTheWeek, , this.store.currentDate.time] = currentDate.split(', ');
    [this.store.currentDate.month, this.store.currentDate.number] = currentDate.split(', ')[1].split(' ');

    this.broadcast();
  }
}
