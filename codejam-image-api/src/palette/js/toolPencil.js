export default class ToolPencil {
  constructor(store) {
    this.toolPencil = document.querySelector('.tool_pencil');
    this.toolPencil.classList.add('tool_pencil-active');

    this.isActive = true;

    this.store = store;
    this.store.isPencilActive = this.isActive;
  };

  toggleIsActive() {
    this.isActive = !this.isActive;
  };

  toggleClass() {
    this.toolPencil.classList.toggle('tool_pencil-active');
  };

  addClickHandler() {
    this.toolPencil.addEventListener('click', () => {
      this.toggleIsActive();

      this.toggleClass();

      this.store.isPencilActive = this.isActive;
    });
  };
};
