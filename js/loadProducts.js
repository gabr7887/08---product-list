import createProductButton from './createProductButton.js';
import createProductInfo from './createProductInfo.js';
import buttonProductLogic from './buttonProductLogic.js';
import cart from './cart.js';

export default class loadProducts {
  constructor(caminho, container) {
    this.caminho = caminho;
    this.container = document.getElementById(container);
    this.cart = new cart();
  }

  async load() {
    const data = await fetch(this.caminho);
    const json = await data.json();
    const dados = Array.from(json);
    const dado2 = dados.map((dado) => {
      dado.quantidade = 0;
      return dado;
    });
    dado2.forEach((dado) => {
      const elemento = document.createElement('div');
      elemento.classList.add('produto');
      const elementoImg = document.createElement('img');
      elementoImg.setAttribute('src', dado.image.desktop);
      const button = new createProductButton();
      const infoDiv = new createProductInfo();
      elemento.appendChild(elementoImg);
      elemento.appendChild(button.load(dado.quantidade));
      elemento.appendChild(infoDiv.load(dado));
      this.container?.appendChild(elemento);
      this.cart.elements.push(dado);
    });
    const buttons = new buttonProductLogic(this.cart);
    buttons.init();
  }
}
