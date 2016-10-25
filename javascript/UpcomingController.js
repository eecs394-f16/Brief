angular.module('brief').controller('UpcomingController', ['$scope', '$http', function($scope, $http) {
	$scope.upcoming = {};
	
	$http({
		method: 'GET',
		url: 'http://brief-backend.herokuapp.com/events'
	}).then(function(response){
		$scope.upcoming = response;
		$scope.list_upcoming= $scope.upcoming.data.entries;
		
		var e;
		for(var i=0;i<$scope.list_upcoming.length;i++){
			e =$scope.list_upcoming[i];
			
			switch (e.category){
			case "Academic":
				e.color = "Aca";
				break;
			case "Fitness & Recreation":
				e.color = "Fit";
				break;
			case "Other":
				e.color = "Oth";
				break;
			case "Religious":
				e.color = "Rel";
				break;
			case "Lectures & Meetings":
				e.color = "Lec";
				break;
			case "Athletics":
				e.color = "Ath";
				break;
			case "Fine Arts":
				e.color = "Fine";
				break;
			case "Social":
				e.color = "Soc";
				break;
			case "Global & Civil Engagement":
				e.color = "Glo";
				break;
			case "Training":
				e.color = "Tra";
				break;
			case "Multicultural & Diversity":
				e.color = "Mul";
				break;
			default:
				e.color = "Nul";
			$scope.list_upcoming[i] = e;
			}
		}
			
		
		
	});
	$scope.debug = function(print){console.log(print)}
	$scope.openLink = function(url) {
	window.open(url, '_blank');
	
	}
}]);