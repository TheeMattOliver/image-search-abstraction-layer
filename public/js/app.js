angular.module('imgurApp', [])

// .service('item', function($http) {
//   return $http({method: 'GET', url:'/search/:item'}).
//          then(function(response) {
//            console.log('This is the response.data', response.data);
//            return response.data;
//          });
// })
//  .controller('formCtrl', function($scope) {
//     $scope.user = angular.copy($scope.master);
// });


angular.module('imgurApp', [])

.controller('formCtrl', function($scope, $http) {
  $scope.search = function() {

    $http.get('/latest')
      .success(function(data, status, headers, config) {
        console.log('Button was clicked!')
        $scope.results = data;
      })
      .error(function(data, status, headers, config) {
        // log error
        console.log('Error')
      });
  }  

});