const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password');

const Product = sequelize.define('product', {
  sku: {
    type: Sequelize.STRING
  },
  itemName: {
    type: Sequelize.STRING
  },
  landedCost: {
    type: Sequelize.INTEGER
  }
});

Product.sync({force: true}).then(() => {
    return Product.create({
      sku: 'ABC',
      itemName: 'Small Widget',
      landedCost: 15.00
    });
  });
