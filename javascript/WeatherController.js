angular.module('brief').controller('WeatherController', ['$scope', function($scope, $http) {
    $scope.weather =
	$scope.class = "clouds-bg";
	
	$http({
		method: 'GET',
		url: '/weather.json'
	}).then(function success(response){
		$scope.weather = response;
	});
}]);
