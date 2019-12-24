export default class ShowLocationInformation {
  constructor(store) {
    this.store = store;
    this.locationName = document.querySelector('.location-name');
  }

  showLocationInformation() {
    this.locationName.textContent = this.defineLocationName();
  }

  defineLocationName() {
    const city =
      this.store.locationInformation.components.city ||
      this.store.locationInformation.components.county ||
      this.store.locationInformation.components.state;
    const { country } = this.store.locationInformation.components;

    return `${city}, ${country}`;
  }
}
