'use strict';

/* jshint -W098 */
angular.module('mean.myTheme').controller('MyThemeController', ['$scope', 'Global', 'MyTheme',
  function($scope, Global, MyTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'myTheme'
    };
  }
]);
