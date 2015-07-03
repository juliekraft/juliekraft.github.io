var app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'PortfolioController',
      templateUrl: 'views/portfolio.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});