const { Product } = require('../models');

const productData = [
  {
    id: 1,
    title: 'AC/DC T-Shirt',
    description: 'Lightly used. A collectible for die hard fans',
    price: 15,
  },
  {
    id: 2,
    title: 'Running Sneakers',
    description: 'A cool pair of shoes. You can run REAL fast',
    price: 50,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
