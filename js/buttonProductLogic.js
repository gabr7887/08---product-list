export default class buttonProductLogic {
  constructor(cart) {
    this.buttons = document.querySelectorAll('.produto-button');
    this.cart = cart;
  }

  increment() {
    this.buttons.forEach((element, index) => {
      const qte = element.querySelector('.quantidade');
      element
        .querySelector('.buttonIncrement')
        .addEventListener('click', () => {
          qte.innerText = +qte.innerText + 1;
          this.cart.updateCartProduct(
            this.cart.elements[index].id,
            qte.innerText,
            this.cart.elements[index].price,
          );
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
            this.cart.updateCartProduct(
              this.cart.elements[index].id,
              qte.innerText,
              this.cart.elements[index].price,
            );
          } else {
            this.cart.removeCart(this.cart.elements[index].id);
            this.remove(element, qte);
          }
        });
    });
  }

  remove(element, qte) {
    element.parentNode.classList.remove('active');
    qte.innerText = 0;
    this.cart.updateCartTotal();
    if (!this.cart.elementsOn.length) {
      this.cart.cartElement.classList.remove('active');
    }
  }

  removeFromCart() {
    console.log(this.buttons);
    this.buttons.forEach((element, index) => {
      const qte = element.querySelector('.quantidade');
      this.cart.removeCart(this.cart.elements[index].id);
      this.remove(element, qte);
    });
  }

  addRemoveToCart() {
    const buttons = document.querySelectorAll('.cart-remove');
    buttons.forEach((element) => {
      element.removeEventListener('click', this.removeFromCart);
    });
    buttons.forEach((element) => {
      element.addEventListener('click', this.removeFromCart);
    });
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
          this.cart.cartAdd(this.cart.elements[index]);
          this.addRemoveToCart();
          this.cart.updateCartProduct(
            this.cart.elements[index].id,
            qte.innerText,
            this.cart.elements[index].price,
          );
        });
    });
  }

  init() {
    this.ativate();
    this.increment();
    this.decrement();
  }
}
