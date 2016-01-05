(function() {
  'use strict';

  angular
    .module('mean.learn')
    .factory('Learn', Learn);

  Learn.$inject = ['$resource'];

  function Learn($resource) {
    return {
      resource : $resource('/api/learn/resource/:resourceId', {
        resourceId: '@_id'
      }, {
        'update': { method: 'PUT' }
      }),
      category : $resource('/api/learn/category/:categoryId', {
        categoryId: '@_id'
      }, {
        'update': { method: 'PUT' }
      })
    };
  }
})();
