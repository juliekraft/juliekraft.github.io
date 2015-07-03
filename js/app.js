var app = angular.module('portfolio', ['ngRoute']);

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