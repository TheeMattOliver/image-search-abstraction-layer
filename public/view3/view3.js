'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope, $http) {
      $http.get('/search/')
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