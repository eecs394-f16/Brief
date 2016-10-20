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

angular.module('brief').controller('NewsController', ['$scope', function($scope) {
  $scope.news = [
    {

        "title":"NU Dining implements new late-night locations, changes to dining hall options",
        "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/DINING_LaurenDuquette_WEB-900x600.jpg",
        "link": "http://dailynorthwestern.com/2016/09/30/campus/nu-dining-implements-new-late-night-locations-changes-to-dining-hall-options/"
    },
    {
        "title":"Wyatt: Non-black students can easily improve Blowout atmosphere by omitting the N-word",
        "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/AO_YoungThug_WEB-1-900x600.jpg",
        "link": "http://dailynorthwestern.com/2016/09/29/opinion/non-black-students-can-easily-improve-blowout-atmosphere-by-omitting-the-n-word/"
    },
    {

        "title":"Northwestern student Chuyuan Qiu remembered for sense of wonder, playful humor",
        "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/CHU_YunQi_WEB-600x900.jpg",
        "link": "http://dailynorthwestern.com/2016/09/29/campus/northwestern-student-chuyuan-qiu-remembered-for-sense-of-wonder-playful-humor/"
    }
  ];

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
			"img":"/data/Garage.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"The Importance of Being Ernest",
			"time":"6:30pm-8:00pm",
			"date": "10/3",
			"location": "Shanley Pavillion",
			"img":"/data/Earnest.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"NCE Concert",
			"time":"7:30pm-9:30pm",
			"date": "10/3",
			"location": "Tech Auditorium",
			"img":"/data/NCE.png"
		}
	}
	,{
		"type": 2,
		"data":{
			"name":"Eric Whitacre - Orchestral Conducting",
			"time":"8:00pm-10:00pm",
			"date": "10/3",
			"location": "Cahn Auditorium",
			"img":"/data/Eric.png"
		}
	}
	
	
	];
}]);
angular.module('brief').controller('WeatherController', ['$scope', function($scope, $http) {
    $scope.weather = {
  "main": {
    "grnd_level": 1015.23,
    "humidity": 92,
    "pressure": 1015.23,
    "sea_level": 1037.61,
    "temp": 63,
    "temp_max": 65,
    "temp_min": 59
  },
  "weather": [
    {
      "description": "broken clouds",
      "icon": "04n",
      "id": 803,
      "main": "Clouds"
    }
  ]
}
	$scope.class = "clouds-bg";

}]);
