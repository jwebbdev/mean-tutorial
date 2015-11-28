'use strict';

angular.module('mean.myTheme').config(['$viewPathProvider', '$stateProvider',
  function($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
  }
]);