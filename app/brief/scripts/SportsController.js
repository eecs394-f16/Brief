angular.module('brief').controller('SportsController', ['$scope', function($scope) {
    $scope.sports= [
    	{
			"type": 0,
			"data":{
				"name":"Nebraska",
				"sport": "Soccer",
				"time":"7:00pm",
				"date":"9/30",
				"location":"Lakeside Field",
				"img":"nebraska.png"
			}
		},
		{
			"type": 5,
			"data":{
				"name":"University of Illinois",
				"sport": "Basketball",
				"date":"9/20",
				"score": {"NU":35, "OPP": 21},
				"img":"UofI.png"
			}
		},
		{
			"type": 3,
			"data":{
				"name":"Nebraska drops Wildcats in Big Ten opener",
				"sport": "Football",
				"img":"nebraska.png",
				"link": "http://dailynorthwestern.com/2016/09/25/sports/football-nebraska-drops-wildcats-in-big-ten-opener/"
			}
		}
    ];
}]);