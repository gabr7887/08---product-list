export default class buttonProductLogic {
  constructor(cart) {
    this.buttons = document.querySelectorAll('.produto-button');
    this.cart = cart;
  }

  increment() {
    this.buttons.forEach((element) => {
      const qte = element.querySelector('.quantidade');
      element
        .querySelector('.buttonIncrement')
        .addEventListener('click', () => {
          qte.innerText = +qte.innerText + 1;
        });
    });
  }

  decrement() {
    this.buttons.forEach((element, index) => {
      const qte = element.querySelector('.quantidade');
      element
        .querySelector('.buttonDecrement')
        .addEventListener('click', () => {
          if (qte.innerText > 1) {
            qte.innerText = +qte.innerText - 1;
          } else {
            this.remove(element, qte);
            this.cart.removeCart(index);
          }
        });
    });
  }

  remove(element, qte) {
    element.parentNode.classList.remove('active');
    qte.innerText = 0;
  }

  ativate() {
    this.buttons.forEach((element, index) => {
      element
        .querySelector('.button-inactive')
        .addEventListener('click', () => {
          element.parentNode.classList.add('active');
          const qte = element.querySelector('.quantidade');
          qte.innerText = +qte.innerText + 1;
          if (!this.cart.cartElement.classList.contains('active')) {
            this.cart.cartElement.classList.add('active');
          }
          this.cart.cartAdd(this.cart.elements[index], index);
        });
    });
  }

  init() {
    this.ativate();
    this.increment();
    this.decrement();
  }
}
