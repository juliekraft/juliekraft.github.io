var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'PortfolioController',
      templateUrl: 'js/views/projectInfo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});