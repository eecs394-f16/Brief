angular.module('brief').controller('indexController', ['$scope', function($scope) {
  $scope.today = moment().format('dddd, MMMM Do');
}]);
