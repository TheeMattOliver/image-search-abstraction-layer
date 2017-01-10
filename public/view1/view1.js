'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

// .controller('View1Ctrl', [function() {
	.controller('View1Ctrl', function($scope, $http) {
     $scope.search = function() {
      $http.get('/search/'+ $scope.searchTerm)
        .success(function(data, status, headers, config) {
          console.log('Success!');
          console.log("Here's the data: ", data);
          $scope.results = data;
        })
        .error(function(data, status, headers, config) {
          // log error
          console.log('Error')
        });
    }  
  })
// }]);