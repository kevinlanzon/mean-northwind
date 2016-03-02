'use strict';

module.exports = function(app) {
  // Require functions from categories controller
  var categories = require('../../app/controllers/categories.server.controller');

  app.route('/categories')
    .get(categories.list)
    .post(categories.create);

  app.route('/categories/:categoryId')
    .get(categories.read)
    .put(categories.update)
    .delete(categories.delete);

  // Where the categoryId is present in the URL
  // the logic to 'get by id' is handled by this single function
  // and added to the request object (request.category).
  app.param('categoryId', categories.categoryByID);
};
