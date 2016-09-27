angular.module('brief').controller('NewsController', ['$scope', function($scope, $http) {
    $scope.news = [
        {
            "type": 4,
            "data":{
                "name":"Student Organizations & Activities will meet all student groups to discuss inclusivity, membership",
                "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/unnamed-4-900x601.jpg",
                "link": "http://dailynorthwestern.com/2016/09/22/campus/student-organizations-activities-will-meet-all-student-groups-to-discuss-inclusivity-membership/"
            }
        },
        {
            "type": 4,
            "data":{
                "name":"University hires architectural firm to begin planning Black House renovations",
                "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/1-WEB-900x600-1-900x600.jpg",
                "link": "http://dailynorthwestern.com/2016/09/22/campus/university-hires-architectural-firm-to-begin-planning-black-house-renovations/"
            }
        }
    ];

}]);