export default class popupProduct {
  constructor(element) {
    this.element = element;
  }

  create() {
    console.log('aconteceu');
    const divContainer = document.createElement('div');
    divContainer.classList.add(`popup-product`);
    divContainer.classList.add(this.element.id);
    const firstDiv = document.createElement('div');
    const divImg = document.querySelector('div');
    divImg.classList.add('popup-product-img');
    const productImg = document.createElement('img');
    productImg.src = this.element.image.thumbnail;
    divImg.appendChild(productImg);
    firstDiv.appendChild(divImg);
    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('popup-product-info');
    const title = document.createElement('h2');
    title.innerText = this.element.name;
    title.classList.add('title');
    const quantityInfo = document.createElement('span');
    quantityInfo.innerText = this.element.quantidade + 1;
    quantityInfo.classList.add('cart-product-quantity');
    const price = document.createElement('span');
    price.classList.add('cart-product-price');
    price.innerText = `$${this.element.price.toFixed(2)}`;
    productInfoDiv.appendChild(title);
    productInfoDiv.appendChild(quantityInfo);
    productInfoDiv.appendChild(price);
    firstDiv.appendChild(productInfoDiv);
    const productPriceFinal = document.createElement('span');
    productPriceFinal.innerText = (
      this.element.quantidade * this.element.price
    ).toFixed(2);
    productPriceFinal.classList.add('cart-product-total');
    divContainer.appendChild(firstDiv);
    divContainer.appendChild(productPriceFinal);
    return divContainer;
  }
}
