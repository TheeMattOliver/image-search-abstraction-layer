'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $http) {
      $http.get('/latest')
        .success(function(data, status, headers, config) {
          console.log('Success!');
          console.log("Here's the data: ", data);
          $scope.results = data;
        })
        .error(function(data, status, headers, config) {
          // log error
          console.log('Error')
        });  
  })