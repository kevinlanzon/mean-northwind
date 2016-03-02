'use strict';

module.exports = function(app) {
  // Require functions from products controller
  var products = require('../../app/controllers/products.server.controller');

  app.route('/products')
    .get(products.list)
    .post(products.create);

  app.route('/products/:productId')
    .get(products.read);
};
