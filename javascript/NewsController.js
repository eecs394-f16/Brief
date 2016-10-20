angular.module('brief').controller('NewsController', ['$scope', '$http', function($scope, $http) {
 	$scope.news = {};
 
	$http({
		method: 'GET',
		url: 'http://brief-backend.herokuapp.com/news'
	}).then(function(response){
		$scope.news = response;
		$scope.list= $scope.news.data.entries;
			
	});

	$scope.openLink = function(url) {
	window.open(url, '_blank');
	}

}]);
