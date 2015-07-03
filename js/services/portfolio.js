app.factory('portfolio', ['$http', function($http) {
  return $http.get('https://juliekraft.github.io/data/portfolio.json')
    .success(function(data){
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);