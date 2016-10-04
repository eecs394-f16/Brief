angular.module('brief').controller('UpcomingController', ['$scope', function($scope) {
	$scope.upcoming = [
	
	{
		"type": 2,
		"data":{
			"name":"McCormick job fair",
			"time":"4:00pm-7:00pm",
			"date": "10/3",
			"location": "Tech",
			"img":"/data/Eng.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"Building a Better Tomorrow",
			"time":"5:30pm-7:30pm",
			"date": "10/3",
			"location": "The Garage",
			"img":"/data/Eng.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"The Importance of Being Ernest",
			"time":"6:30pm-8:00pm",
			"date": "10/3",
			"location": "Shanley Pavillion",
			"img":"/data/Eng.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"NCE Concert",
			"time":"7:30pm-9:30pm",
			"date": "10/3",
			"location": "Tech Auditorium",
			"img":"/data/Eng.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"Eric Whitacre - Orchestral Conducting",
			"time":"8:00pm-10:00pm",
			"date": "10/3",
			"location": "Cahn Auditorium",
			"img":"/data/Eng.png"
		}
	}
	
	
	];
}]);