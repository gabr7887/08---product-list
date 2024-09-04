import cartProduct from './cartProduct.js';

export default class cart {
  constructor() {
    this.cartElement = document.getElementById('cart');
    this.cartProductsContainer =
      this.cartElement.querySelector('.cart-products');
    this.elements = [];
    this.elementsOn = [];
  }

  cartAdd(element, i) {
    console.log(this.elements);
    const product = new cartProduct(element);
    const final = { index: i, elem: product.create() };
    this.elementsOn.push(final);
    this.cartProductsContainer.appendChild(final.elem);
  }

  removeCart(index) {
    console.log('aconteceu');
    console.log(this.elementsOn.indexOf({ index }));
    this.cartProductsContainer.removeChild(this.elementsOn[index]);
    this.elementsOn.slice(this.elementsOn.indexOf({ index }));
    console.log('chegou ao final');
  }
}
