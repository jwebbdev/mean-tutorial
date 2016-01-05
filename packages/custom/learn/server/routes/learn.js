'use strict';

var resource = require('../controllers/resource.js')();
var category = require('../controllers/category.js')();

// The Package is past automatically as first parameter
module.exports = function(Learn, app, auth, database) {
  app.route('/api/learn/resource')
    .get(resource.list)
    .post(auth.requiresLogin, auth.requiresAdmin, resource.create);
  app.route('/api/learn/resource/:resourceId')
    .get(auth.isMongoId, resource.show)
    .put(auth.isMongoId, auth.requiresLogin, auth.requiresAdmin, resource.update)
    .delete(auth.isMongoId, auth.requiresLogin, auth.requiresAdmin, resource.destroy);
  app.param('resourceId', resource.resource);

  app.route('/api/learn/category')
    .get(category.list)
    .post(auth.requiresLogin, auth.requiresAdmin, category.create);
  app.route('/api/learn/category/:categoryId')
    .get(auth.isMongoId, category.show)
    .put(auth.isMongoId, auth.requiresLogin, auth.requiresAdmin, category.update)
    .delete(auth.isMongoId, auth.requiresLogin, auth.requiresAdmin, category.destroy);
  app.param('categoryId', category.category);

};