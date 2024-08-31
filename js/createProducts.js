export default class createProducts {
  constructor(products, container) {
    this.products = products;
    this.container = document.getElementById(container);
  }

  generateHtmlElement() {
    const htmlElements = this.products.foreach((element) => {
      const elemento = document.createElement('div')
        .innerHTML(`<img src="./assets/images/image-waffle-desktop.jpg" alt="">
        <div class="produto-button">
          <div class="button-inactive">
            <img src="./assets/images/icon-add-to-cart.svg" alt="">
            <span>Add to Cart</span>
          </div>
          <div class="button-active">
            <div>
              <img src="./assets/images/icon-decrement-quantity.svg" alt="">
            </div>
            <span class="quantidade">1</span>
            <div>
              <img src="./assets/images/icon-increment-quantity.svg" alt="">
            </div>
          </div>
        </div>
        <div class="product-info">
          <span class="category">Waffle</span>
          <h2 class="product-name">Waffle with Berries</h2>
          <span class="price">$6.50</span>
        </div>`);
      this.container.appendChild(elemento);
    });
    htmlElements();
  }
}
