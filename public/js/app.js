
angular.module('imgurApp',[]).controller("MyCtrl", MyCtrl);


function MyCtrl($scope, $http) {

    $scope.search_term = "";
    
    $scope.findImages = function(){
    
    $http.get("/search/" + $scope.location).success(function(data){
	    $scope.searchTerm = data.item;
	    $scope.windSpeed = data.wind.speed;
	    $scope.windDegree = data.wind.deg;

    }) 
    }
}