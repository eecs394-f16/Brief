angular.module('brief').controller('UpcomingController', ['$scope', function($scope) {
	$scope.upcoming =
	[
	{
		"type": 1,
		"data":{
			"name":"ASG applications due",
			"time":"11:59pm",
			"date": "10/4",
			"img":"ASG.png"
		}
	}
	{
		"type": 1,
		"data":{
			"name":"Last day to drop classes",
			"time":null,
			"date": "10/25",
			"img":"drop.png"
		}
	}
	{
		"type": 2,
		"data":{
			"name":"McCormick job fair",
			"timeStart":"4:00pm",
			"timeEnd": "7:00pm",
			"dateStart": "10/2",
			"dateEnd": null,
			"location": "Tech",
			"img":"eng.png"
		}
	}
	];
}]);