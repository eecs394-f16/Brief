angular.module('brief').controller('WeatherController', ['$scope', '$http', function($scope, $http) {
	$scope.class = "clouds-bg";
	
	$http({
		method: 'GET',
		url: 'http://brief-backend.herokuapp.com/weather'
	}).then(function(response){
		$scope.weather = response;
		console.log(response.data);
		
	});
}]);

