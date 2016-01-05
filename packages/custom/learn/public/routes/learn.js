(function() {
  'use strict';

  angular
    .module('mean.learn')
    .config(config);
    function config($stateProvider) {
      $stateProvider
        .state('learn', {
          templateUrl: '/learn/views/index.html',
          abstract: true
        })
        .state('learn.main', {
          templateUrl: '/learn/views/main.html',
          url: '/learn',
          controller: 'LearnController as learnCtrl'
        });
    }
})();