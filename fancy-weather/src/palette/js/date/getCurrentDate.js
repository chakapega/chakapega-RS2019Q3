import { getDayNumberOfTheWeek, getMonthNumber } from '../helpers/helpers';

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
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      timeZone: timezone,
      hour: 'numeric',
      minute: '2-digit',
    };
    const currentDate = new Date().toLocaleString('en', options);

    [this.dayOfTheWeek, , this.store.currentDate.time] = currentDate.split(', ');
    [this.month, this.store.currentDate.number] = currentDate.split(', ')[1].split(' ');

    this.store.currentDate.dayOfTheWeek = getDayNumberOfTheWeek(this.dayOfTheWeek);
    this.store.currentDate.month = getMonthNumber(this.month);

    this.broadcast();
  }
}
