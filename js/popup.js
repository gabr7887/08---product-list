export default class popup {
  constructor() {
    this.cartButton = document.getElementById('cartButton');
    this.finalButton = document.getElementById('finalButton');
    this.container = document.getElementById('PopupProductsContainer');
    this.price = this.container.querySelector('.finalPrice');
  }

  activate() {
    this.cartButton.addEventListener('click', () => {
      document.body.classList.add('active');
    });
    this.finalButton.addEventListener('click', () => {
      window.location.reload();
    });
  }
}
