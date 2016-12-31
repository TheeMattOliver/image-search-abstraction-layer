angular.module('imgurApp', ['ngRoute'])

// .service('item', function($http) {
//   return $http({method: 'GET', url:'/search/:item'}).
//          then(function(response) {
//            console.log('This is the response.data', response.data);
//            return response.data;
//          });
// })
  .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                // specify which template to display
                templateUrl: "index.html",
                controller: "searchCtrl"
            })
            .when("/search/:item", {
                controller: "searchCtrl",
                templateUrl: "index.html"
            })
            .when("/latest", {
                controller: "listCtrl",
                templateUrl: "list.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })

  .controller('searchCtrl', function($scope, $http) {
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
  .controller("listCtrl", function($scope) {
    $scope.renderList = function() {
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
        }  

      $scope.renderList();
    })




