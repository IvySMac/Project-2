const { Product } = require('../models');

const productData = [
  {
    id: 1,
    name: 'AC/DC T-Shirt',
    description: 'Lightly used. A collectible for die hard fans',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Running Sneakers',
    description: 'A cool pair of shoes. You can run REAL fast',
    quantity: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
