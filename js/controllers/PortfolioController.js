app.controller('PortfolioController', ['$scope', 'projects', function($scope, projects) {
  projects.success(function(data) {
    $scope.myProjects = data;
  });
}]);