angular.module('imgurApp', [])
 .controller('formCtrl', function($scope) {
    $scope.master = {searchTerm:"Your search term..."};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});



// angular.module('imgurApp', [])

// 	.controller('imgurDataController', ['$scope','$http', function($scope,$http) {
// 		$scope.search_term = `${search_term}`;
// 		$http.get('/search/'+$scope.search_term)
// 		        .success(function(data) {
// 		            $scope.userData = data;
// 		        });
// 		}]);
