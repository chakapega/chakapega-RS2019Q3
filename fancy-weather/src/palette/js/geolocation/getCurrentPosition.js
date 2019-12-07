export default class GetCurrentPosition {
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

  getCurrentPosition() {
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
    const success = pos => {
      this.store.currentPosition.latitude = pos.coords.latitude;
      this.store.currentPosition.longitude = pos.coords.longitude;

      this.broadcast();
    };

    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
}
