export default class cartProduct {
  constructor(element) {
    this.element = element;
  }

  create() {
    console.log(this.element);
    const productContainer = document.createElement('div');
    productContainer.classList.add('cart-product');
    productContainer.classList.add(this.element.id);
    const infos = document.createElement('div');
    infos.classList.add('cart-product-infos');
    const name = document.createElement('h3');
    name.innerText = this.element.name;
    infos.appendChild(name);
    const priceDiv = document.createElement('div');
    const quantitySpan = document.createElement('span');
    quantitySpan.innerText = `${this.element.quantidade}`;
    quantitySpan.classList.add('cart-product-quantity');
    priceDiv.appendChild(quantitySpan);
    const price = document.createElement('span');
    price.classList.add('cart-product-price');
    price.innerText = `$${this.element.price.toFixed(2)}`;
    priceDiv.appendChild(price);
    const finalPrice = document.createElement('span');
    finalPrice.innerText = (
      this.element.quantidade * this.element.price
    ).toFixed(2);
    finalPrice.classList.add('cart-product-total');
    priceDiv.appendChild(finalPrice);
    infos.appendChild(priceDiv);
    const divRemove = document.createElement('div');
    divRemove.classList.add('cart-remove');
    const removeImg = document.createElement('img');
    removeImg.src = './assets/images/icon-remove-item.svg';
    divRemove.appendChild(removeImg);
    productContainer.appendChild(infos);
    productContainer.appendChild(divRemove);
    return productContainer;
  }
}
