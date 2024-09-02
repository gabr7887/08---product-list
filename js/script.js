import loadProducts from './loadProducts.js';

const loadProduct = new loadProducts('../data.json', 'products');

loadProduct.load();
