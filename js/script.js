import loadProducts from './loadProducts.js';
import createProducts from './createProducts.js';

const loadProduct = new loadProducts('../data.json', 'products');

loadProduct.load();
