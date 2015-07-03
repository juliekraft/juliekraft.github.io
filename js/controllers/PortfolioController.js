app.controller('PortfolioController', ['$scope', 'portfolio', function($scope, portfolio) {
  portfolio.success(function(data) {
    $scope.portfolio = data;
  });
}]);