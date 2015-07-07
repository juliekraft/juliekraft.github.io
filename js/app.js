var app = angular.module('Portfolio', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ProjectsController',
      templateUrl: 'js/views/projectList.html'
    })
    .when('/:id', {
      controller: 'ProjectController',
      templateUrl: 'js/views/projectDetail.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});