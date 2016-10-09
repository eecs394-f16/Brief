angular.module('brief').controller('WeatherController', ['$scope', function($scope, $http) {
    $scope.weather = {
        "temp": 61,
        "high": 71,
        "low": 54,
        "humidity": "89%",
        "sky": "cloudy"
    }

}]);
