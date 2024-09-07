export default class popup {
  constructor() {
    this.buttons = document.querySelectorAll('.button');
    this.container = document.getElementById('PopupProductsContainer');
    this.price = this.container.querySelector('finalPrice');
  }

  activate() {
    this.buttons.forEach((element) => {
      element.addEventListener('click', () => {
        document.body.classList.toggle('active');
      });
    });
  }
}
