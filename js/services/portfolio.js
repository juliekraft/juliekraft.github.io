app.factory('portfolio', ['$http', function($http) {
  return $http.get('http://juliekraft.github.io/views/portfolio.html')
         .success(function(data) {
           return data;
           console.log('success');
         })
         .error(function(err) {
           return err;
         });
}]);