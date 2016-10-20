angular.module('brief').controller('UpcomingController', ['$scope', '$http', function($scope, $http) {
	$scope.upcoming = {};
	
	$http({
		method: 'GET',
		url: 'http://brief-backend.herokuapp.com/events'
	}).then(function(response){
		$scope.upcoming = response;
		$scope.list_upcoming= $scope.upcoming.data.entries;
		
		
	});
	
	$scope.openLink = function(url) {
	window.open(url, '_blank');
	
	}
}]);