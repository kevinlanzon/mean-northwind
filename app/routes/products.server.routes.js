'use strict';

module.exports = function(app) {
  // Require functions from products controller
  var products = require('../../app/controllers/products.server.controller');

  app.route('/products')
    .get(products.list);
};