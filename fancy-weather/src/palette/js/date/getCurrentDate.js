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

    switch (this.dayOfTheWeek) {
      case 'Monday':
        this.store.currentDate.dayOfTheWeek = 0;
        break;
      case 'Tuesday':
        this.store.currentDate.dayOfTheWeek = 1;
        break;
      case 'Wednesday':
        this.store.currentDate.dayOfTheWeek = 2;
        break;
      case 'Thursday':
        this.store.currentDate.dayOfTheWeek = 3;
        break;
      case 'Friday':
        this.store.currentDate.dayOfTheWeek = 4;
        break;
      case 'Saturday':
        this.store.currentDate.dayOfTheWeek = 5;
        break;
      case 'Sunday':
        this.store.currentDate.dayOfTheWeek = 6;
        break;
      default:
        break;
    }

    switch (this.month) {
      case 'January':
        this.store.currentDate.month = 0;
        break;
      case 'February':
        this.store.currentDate.month = 1;
        break;
      case 'March':
        this.store.currentDate.month = 2;
        break;
      case 'April':
        this.store.currentDate.month = 3;
        break;
      case 'May':
        this.store.currentDate.month = 4;
        break;
      case 'June':
        this.store.currentDate.month = 5;
        break;
      case 'July':
        this.store.currentDate.month = 6;
        break;
      case 'August':
        this.store.currentDate.month = 7;
        break;
      case 'September':
        this.store.currentDate.month = 8;
        break;
      case 'October':
        this.store.currentDate.month = 9;
        break;
      case 'November':
        this.store.currentDate.month = 10;
        break;
      case 'December':
        this.store.currentDate.month = 11;
        break;
      default:
        break;
    }

    this.broadcast();
  }
}
