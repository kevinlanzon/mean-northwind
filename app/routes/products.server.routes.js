'use strict';

module.exports = function(app) {
  // Require functions from products controller
  var products = require('../../app/controllers/products.server.controller');

  app.route('/products')
    .get(products.list)
    .post(products.create);

  app.route('/products/:productId')
    .get(products.read)
    .put(products.update)
    .delete(products.delete);

  // Where the productId is present in the URL
  // the logic to 'get by id' is handled by this single function
  // and added to the request object (request.product).
  app.param('productId', products.productByID);
};
