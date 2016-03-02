'use strict';

module.exports = function(app) {
  // Require functions from categories controller
  var categories = require('../../app/controllers/categories.server.controller'),
      users = require('../../app/controllers/users.server.controller');

  app.route('/categories')
    .get(categories.list)
    .post(users.requiresLogin, categories.create);

  app.route('/categories/:categoryId')
    .get(categories.read)
    .put(users.requiresLogin, categories.update)
    .delete(users.requiresLogin, categories.delete);

  // Where the categoryId is present in the URL
  // the logic to 'get by id' is handled by this single function
  // and added to the request object (request.category).
  app.param('categoryId', categories.categoryByID);
};
