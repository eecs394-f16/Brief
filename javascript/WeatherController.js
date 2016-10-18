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
