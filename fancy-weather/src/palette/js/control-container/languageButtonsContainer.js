export default class LanguageButtonsContainer {
  constructor() {
    this.observers = [];
    this.languageButtonsContainer = document.querySelector('.language-buttons-container');
    this.languageButtonEn = document.querySelector('.language-button_en');
    this.languageButtonBe = document.querySelector('.language-button_be');
    this.languageButtonRu = document.querySelector('.language-button_ru');
    this.changeLanguage(localStorage.getItem('selectedLanguage') || 'en');
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addClickHandler() {
    this.languageButtonsContainer.addEventListener('click', event =>
      this.changeLanguage(event.target.textContent.toLowerCase()),
    );
  }

  changeLanguage(selectedLanguage) {
    const language = selectedLanguage.toLowerCase();
    const languageButtonActive = document.querySelector('.language-button_active');

    if (this.activeLanguage !== language) {
      switch (language) {
        case 'en':
          if (languageButtonActive) {
            languageButtonActive.classList.remove('language-button_active');
          }
          localStorage.setItem('selectedLanguage', language);
          this.languageButtonEn.classList.add('language-button_active');
          this.languageButtonActive = this.languageButtonEn;
          this.activeLanguage = language;
          break;
        case 'be':
          if (languageButtonActive) {
            languageButtonActive.classList.remove('language-button_active');
          }
          localStorage.setItem('selectedLanguage', language);
          this.languageButtonBe.classList.add('language-button_active');
          this.languageButtonActive = this.languageButtonBe;
          this.activeLanguage = language;
          break;
        case 'ru':
          if (languageButtonActive) {
            languageButtonActive.classList.remove('language-button_active');
          }
          localStorage.setItem('selectedLanguage', language);
          this.languageButtonRu.classList.add('language-button_active');
          this.languageButtonActive = this.languageButtonRu;
          this.activeLanguage = language;
          break;

        default:
          break;
      }

      this.broadcast();
    }
  }
}
