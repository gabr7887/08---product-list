export default class loadProducts {
  constructor(caminho) {
    this.caminho = caminho;
  }

  async load() {
    const data = await fetch(this.caminho);
    const json = await data.json();
    console.log(json);
  }
}
