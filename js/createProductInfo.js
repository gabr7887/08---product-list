export default class createProductInfo {
  constructor() {}

  load(dado) {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('product-info');
    const category = document.createElement('span');
    category.classList.add('category');
    category.innerText = dado.category;
    const name = document.createElement('h2');
    name.classList.add('product-name');
    name.innerText = dado.name;
    const price = document.createElement('span');
    price.classList.add('price');
    price.innerText = `$${dado.price.toFixed(2)}`;
    infoDiv.appendChild(category);
    infoDiv.appendChild(name);
    infoDiv.appendChild(price);
    return infoDiv;
  }
}
