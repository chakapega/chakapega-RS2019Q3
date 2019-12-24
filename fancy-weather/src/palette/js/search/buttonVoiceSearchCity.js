import { statusError } from '../helpers/constants';

export default class ButtonVoiceSearchCity {
  constructor(store) {
    this.store = store;
    this.observers = [];
    this.buttonVoiceSearchCity = document.querySelector('.button_voice-search-city');
    this.searchCityInput = document.querySelector('#search-city-input');
    this.iconVoiceSearchCity = document.querySelector('.icon_voice-search-city');
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

      this.iconVoiceSearchCity.classList.add('icon_voice-search-city_active');
      this.record();
    });
  }

  record() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    let result;

    this.recognition.lang = selectedLanguage;
    this.recognition.start();

    this.recognition.onresult = event => {
      result = event.results[0][0].transcript;
      this.searchCityInput.value = result;

      this.broadcast(result);
      this.iconVoiceSearchCity.classList.remove('icon_voice-search-city_active');
    };

    this.recognition.onend = () => {
      this.iconVoiceSearchCity.classList.remove('icon_voice-search-city_active');
      if (!result) this.broadcast(statusError);
    };
  }
}
