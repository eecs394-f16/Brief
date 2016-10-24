angular.module('brief').controller('UpcomingController', ['$scope', '$http', function($scope, $http) {
	$scope.upcoming = {};
	
	$http({
		method: 'GET',
		url: 'http://brief-backend.herokuapp.com/events'
	}).then(function(response){
		$scope.upcoming = response;
		$scope.list_upcoming= $scope.upcoming.data.entries;
		
		var event;
		for(var i=0;i<$scope.list_upcoming;i++){
			event =$scope.list_upcoming[i];
			switch (event.type){
			case "Academic":
				event.color = "Aca"
				break;
			case "Fitness & Recreation":
				event.color = "Fit"
				break;
			case "Other":
				event.color = "Oth"
				break;
			case "Religious":
				event.color = "Rel"
				break;
			case "Lectures & Meetings":
				event.color = "Lec"
				break;
			case "Athletics":
				event.color = "Ath"
				break;
			case "Fine Arts":
				event.color = "Fine"
				break;
			case "Social":
				event.color = "Soc"
				break;
			case "Global & Civil Engagement":
				event.color = "Glo"
				break;
			case "Training":
				event.color = "Tra"
				break;
			case "Multicultural & Diversity":
				event.color = "Mul"
				break;
			$scope.list_upcoming[i] = event;
			}
		}
			
		
		
	});
	
	$scope.openLink = function(url) {
	window.open(url, '_blank');
	
	}
}]);