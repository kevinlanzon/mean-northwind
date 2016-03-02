'use strict';

module.exports = function(app) {
  app.route('/categories')
    .get(function(req, res) {
      res.json([{ name: 'Drinks'},
                { name: 'Food'}
              ]);
    });
};
