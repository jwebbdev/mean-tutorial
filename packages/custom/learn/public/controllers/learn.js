(function() {
  'use strict';

  angular
    .module('mean.learn')
    .controller('LearnController', LearnController);

  LearnController.$inject = ['Learn'];

  function LearnController(Learn) {
    var vm = this;

    vm.title = "Learning Title";
    vm.resources = [];
    vm.loadResources = loadResources;

    function loadResources() {
      console.log('loading');
      Learn.resource.query(successFunction, errorFunction);
    }

    function successFunction(resources) {
      console.log(resources);
      vm.resources = resources;
    }

    function errorFunction(error) {
      console.log(error);
    }
  }
})();
