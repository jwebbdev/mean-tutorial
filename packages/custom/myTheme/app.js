'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MyTheme = new Module('myTheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MyTheme.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  MyTheme.routes(app, auth, database);

  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');

  MyTheme.aggregateAsset('css', 'myTheme.css');
  MyTheme.angularDependencies(['mean.system']);

  return MyTheme;
});
