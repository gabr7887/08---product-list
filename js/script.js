import loadProducts from './loadProducts.js';
import createProducts from './createProducts.js';

const loadProduct = new loadProducts('../data.json');

const products = loadProduct.load();
console.log(products);

const createProduct = new createProducts(products, 'productsContainer');

createProduct.generateHtmlElement();
