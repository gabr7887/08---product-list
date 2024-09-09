import cartProduct from './cartProduct.js';
import popupProduct from './popupProduct.js';

export default class cart {
  constructor(pop) {
    this.cartElement = document.getElementById('cart');
    this.cartProductsContainer =
      this.cartElement.querySelector('.cart-products');
    this.elements = [];
    this.elementsOn = [];
    this.pop = pop;
    this.pop.activate();
  }

  cartAdd(element, remove, button, qte) {
    const product = new cartProduct(element).create();
    this.cartProductsContainer.appendChild(product);
    const productPop = new popupProduct(element).create();
    this.pop.container.insertAdjacentElement('afterbegin', productPop);
    this.elementsOn.push(1);
    console.log(element);
    product.querySelector('.cart-remove').addEventListener('click', () => {
      this.removeCart(element.id);
      remove(button, qte);
    });
  }

  removeCart(id) {
    this.cartProductsContainer.removeChild(
      this.cartProductsContainer.querySelector(`.${id}`),
    );
    this.pop.container.removeChild(this.pop.container.querySelector(`.${id}`));
    this.elementsOn.pop();
  }

  updateCartProduct(id, qte, price) {
    const product = this.cartProductsContainer.querySelector(`.${id}`);
    const popProduct = this.pop.container.querySelector(`.${id}`);
    const quantidade = product.querySelector('.cart-product-quantity');
    quantidade.innerText = +qte;
    product.querySelector('.cart-product-total').innerText = (
      +qte * price
    ).toFixed(2);
    popProduct.querySelector('.cart-product-total').innerText = (
      +qte * price
    ).toFixed(2);
    this.updateCartTotal();
  }

  updateCartTotal() {
    const TotalPrice = this.cartElement.querySelector('.final-total');
    const Prices = Array.from(
      this.cartProductsContainer.querySelectorAll('.cart-product-total'),
    );
    const popTotalPrice = this.pop.container.querySelector('.final-total');
    let result = 0;
    Prices.forEach((element) => {
      result += +element.innerText;
    });
    TotalPrice.innerText = `$${result.toFixed(2)}`;
    popTotalPrice.innerText = `$${result.toFixed(2)}`;
  }
}
