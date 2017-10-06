'use strict';

angular
  .module('exemploAngular', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/uiBootstrap', {
        templateUrl: 'views/ui-bootstrap.html',
        controller: 'UiBootstrapCtrl',
        controllerAs: 'uiboot'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
