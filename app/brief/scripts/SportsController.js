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
			"type": 0,
			"data":{
				"name":"University of Illinois",
				"sport": "Basketball",
				"time":"7:00pm",
				"date":"10/7",
				"location":"Welsh-Ryan Arena",
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
    ]
}]);