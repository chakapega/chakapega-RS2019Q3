export default class LanguageButtonsContainer {
  constructor() {
    this.observers = [];
    this.languageButtonsContainer = document.querySelector('.language-buttons-container');
    this.languageButtonEn = document.querySelector('.language-button_en');
    this.languageButtonBe = document.querySelector('.language-button_be');
    this.languageButtonRu = document.querySelector('.language-button_ru');
    this.changeLanguage(localStorage.getItem('selectedLanguage') || 'EN');
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addClickHandler() {
    this.languageButtonsContainer.addEventListener('click', event => this.changeLanguage(event.target.textContent));
  }

  changeLanguage(selectedLanguage) {
    const languageButtonActive = document.querySelector('.language-button_active');

    if (this.activeLanguage !== selectedLanguage) {
      switch (selectedLanguage) {
        case 'EN':
          if (languageButtonActive) {
            languageButtonActive.classList.remove('language-button_active');
          }
          localStorage.setItem('selectedLanguage', selectedLanguage);
          this.languageButtonEn.classList.add('language-button_active');
          this.languageButtonActive = this.languageButtonEn;
          break;
        case 'BE':
          if (languageButtonActive) {
            languageButtonActive.classList.remove('language-button_active');
          }
          localStorage.setItem('selectedLanguage', selectedLanguage);
          this.languageButtonBe.classList.add('language-button_active');
          this.languageButtonActive = this.languageButtonBe;
          break;
        case 'RU':
          if (languageButtonActive) {
            languageButtonActive.classList.remove('language-button_active');
          }
          localStorage.setItem('selectedLanguage', selectedLanguage);
          this.languageButtonRu.classList.add('language-button_active');
          this.languageButtonActive = this.languageButtonRu;
          break;

        default:
          break;
      }

      this.broadcast();
    }
  }
}
