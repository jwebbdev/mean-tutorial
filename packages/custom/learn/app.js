'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Learn = new Module('learn');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Learn.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Learn.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Learn.menus.add({
    title: 'Learn',
    link: 'learn.main',
    roles: ['anonymous', 'authenticated'],
    menu: 'mymain'
  });
  
  Learn.aggregateAsset('css', 'learn.css');

  return Learn;
});
