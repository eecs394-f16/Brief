angular.module('brief').controller('WeatherController', ['$scope', function($scope, $http) {
    $scope.weather = {
        "temp": 61,
        "high": 61,
        "low": 71,
        "humidity": "89%",
        "sky": "cloudy"
    }

}]);