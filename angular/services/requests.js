'use strict';

angular.module('exemploAngular')
  .factory('requests', function($http) {
    // Public API here
    return {

      get: function(url) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(url).then(function(response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response;
        });
        // Return the promise to the controller
        return promise;
      },

      post: function(url, data) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.post(url, data).then(function(response) {

          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response;
        });
        // Return the promise to the controller
        return promise;
      }

    };
  });
