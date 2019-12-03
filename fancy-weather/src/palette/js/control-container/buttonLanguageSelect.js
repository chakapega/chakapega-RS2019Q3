export default class ButtonLanguageSelect {
  constructor() {
    this.buttonLanguageSelect = document.querySelector('.button_language-select');
    this.listLanguageSelect = document.querySelector('.list_language-select');
    this.textLanguageSelect = document.querySelector('.text_language-select');
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
      const selectedLanguage = event.target.textContent;

      this.changeLanguage(selectedLanguage);
      this.closeListLanguageSelect();
    });
  }

  changeLanguage(selectedLanguage) {
    if (this.textLanguageSelect.textContent !== selectedLanguage) {
      this.textLanguageSelect.textContent = selectedLanguage;
    }
  }
}
