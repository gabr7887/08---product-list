import cartProduct from './cartProduct.js';

export default class cart {
  constructor() {
    this.cartElement = document.getElementById('cart');
    this.cartProductsContainer =
      this.cartElement.querySelector('.cart-products');
    this.elements = [];
    this.elementsOn = [];
  }

  cartAdd(element) {
    console.log(this.elements);
    const product = new cartProduct(element);
    this.cartProductsContainer.appendChild(product.create());
    this.elementsOn.push(1);
  }

  removeCart(id) {
    this.cartProductsContainer.removeChild(
      this.cartProductsContainer.querySelector(`.${id}`),
    );
    this.elementsOn.pop();
  }

  updateCartProduct(id, qte, price) {
    console.log(id, qte, price);
    const product = this.cartProductsContainer.querySelector(`.${id}`);
    const quantidade = product.querySelector('.cart-product-quantity');
    quantidade.innerText = +qte;
    product.querySelector('.cart-product-total').innerText = (
      +qte * price
    ).toFixed(2);
    this.updateCartTotal();
  }

  updateCartTotal() {
    const TotalPrice = this.cartElement.querySelector('.final-total');
    const Prices = Array.from(
      this.cartProductsContainer.querySelectorAll('.cart-product-total'),
    );
    console.log(Prices);
    let result = 0;
    Prices.forEach((element) => {
      result += +element.innerText;
    });
    console.log(result);
    TotalPrice.innerText = result.toFixed(2);
  }
}
