angular.module('brief').controller('WeatherController', ['$scope', function($scope, $http) {
    $scope.weather = {
        "temp": 75,
        "high": 80,
        "low": 71,
        "humidity": "58%",
        "sky": "sunny"
    }


}]);