// Brief App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('brief', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('brief').controller('indexController', ['$scope', function($scope) {
  $scope.today = "October 8, 2016";
}]);

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

angular.module('brief').controller('SportsController', ['$scope', function($scope) {
    $scope.sports = [
    	{
			"type": 0,
			"data":{
				"name":"Nebraska",
				"sport": "Soccer",
				"time":"7:00pm",
				"date":"10/3",
				"location":"Lakeside Field",
				"img":"nebraska.png"
			}
		},
		{
			"type": 5,
			"data":{
				"name":"University of Illinois",
				"sport": "Basketball",
				"date":"10/1",
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

