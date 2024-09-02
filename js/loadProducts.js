import createButton from './createButton.js';
import createProductInfo from './createProductInfo.js';

export default class loadProducts {
  constructor(caminho, container) {
    this.caminho = caminho;
    this.container = document.getElementById(container);
  }

  async load() {
    const data = await fetch(this.caminho);
    const json = await data.json();
    const dados = Array.from(json);
    dados.forEach((dado) => {
      const elemento = document.createElement('div');
      elemento.classList.add('produto');
      const elementoImg = document.createElement('img');
      elementoImg.setAttribute('src', dado.image.desktop);
      const button = new createButton();
      const infoDiv = new createProductInfo();
      elemento.appendChild(elementoImg);
      elemento.appendChild(button.load());
      elemento.appendChild(infoDiv.load(dado));
      this.container?.appendChild(elemento);
    });
  }
}
