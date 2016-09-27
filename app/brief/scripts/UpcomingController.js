angular.module('brief').controller('UpcomingController', ['$scope', function($scope) {
	$scope.upcoming = [
	{
		"type": 1,
		"data":{
			"name":"ASG applications due",
			"time":"11:59pm",
			"date": "10/4",
			"img":"/data/asg.png"
		}
	},
	{
		"type": 1,
		"data":{
			"name":"Last day to drop classes",
			"time":"11:59pm",
			"date": "10/25",
			"img":"/data/drop.png"
		}
	},
	{
		"type": 2,
		"data":{
			"name":"McCormick job fair",
			"time":"4:00pm-7:00pm",
			"date": "10/2",
			"location": "Tech",
			"img":"/data/Eng.png"
		}
	}
	];
}]);