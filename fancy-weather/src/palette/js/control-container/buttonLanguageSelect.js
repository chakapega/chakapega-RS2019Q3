export default class ButtonLanguageSelect {
  constructor() {
    this.observers = [];
    this.buttonLanguageSelect = document.querySelector('.button_language-select');
    this.listLanguageSelect = document.querySelector('.list_language-select');
    this.textLanguageSelect = document.querySelector('.text_language-select');
    this.changeLanguage(localStorage.getItem('selectedLanguage') || 'EN');
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addClickHandlerToButtonLanguageSelect() {
    this.buttonLanguageSelect.addEventListener('click', () => {
      this.showListLanguageSelect();
    });
  }

  showListLanguageSelect() {
    this.listLanguageSelect.classList.add('list_language-select_active');
  }

  closeListLanguageSelect() {
    this.listLanguageSelect.classList.remove('list_language-select_active');
  }

  addClickHandlerToListLanguageSelect() {
    this.listLanguageSelect.addEventListener('click', event => {
      this.selectedLanguage = event.target.textContent;

      this.changeLanguage(this.selectedLanguage);
      this.closeListLanguageSelect();
    });
  }

  changeLanguage(selectedLanguage) {
    if (this.textLanguageSelect.textContent !== selectedLanguage) {
      this.textLanguageSelect.textContent = selectedLanguage;
      localStorage.setItem('selectedLanguage', selectedLanguage);
      this.broadcast();
    }
  }
}
