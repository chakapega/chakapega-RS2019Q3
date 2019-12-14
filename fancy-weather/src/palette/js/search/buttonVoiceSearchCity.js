export default class ButtonVoiceSearchCity {
  constructor(store) {
    this.store = store;
    this.observers = [];
    this.buttonVoiceSearchCity = document.querySelector('.button_voice-search-city');
    this.searchCityInput = document.querySelector('#search-city-input');
    /* eslint-disable */
    this.recognition = new window.webkitSpeechRecognition();
    /* eslint-enable */
    this.recognition.interimResults = false;
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addClickHandler() {
    this.buttonVoiceSearchCity.addEventListener('click', event => {
      event.preventDefault();

      this.record();
    });
  }

  record() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    this.recognition.lang = selectedLanguage;
    this.recognition.start();
    this.recognition.onresult = event => {
      this.searchCityInput.value = event.results[0][0].transcript;

      this.broadcast(event.results[0][0].transcript);
    };
  }
}