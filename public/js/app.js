angular.module('imgurApp', [])
 .controller('formCtrl', function($scope) {
    $scope.master = {searchTerm:"Your search term..."};
    $scope.fetch = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.fetch();
});


angular.module('MyApp', [])
  .controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
      $scope.user = {};
      $scope.results = [];

      $scope.search = function () {
          /* the $http service allows you to make arbitrary ajax requests.
           * in this case you might also consider using angular-resource and setting up a
           * User $resource. */
          $http.get('/your/url/search', { params: user },
            function (response) { $scope.results = response; },
            function (failure) { console.log("failed :(", failure); });
      }
  }]);