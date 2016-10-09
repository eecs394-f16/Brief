angular.module('brief').controller('NewsController', ['$scope', function($scope, supersonic) {
  $scope.news = [
    {
      "type": 4,
      "data":{
        "name":"NU Dining implements new late-night locations, changes to dining hall options",
        "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/DINING_LaurenDuquette_WEB-900x600.jpg",
        "link": "http://dailynorthwestern.com/2016/09/30/campus/nu-dining-implements-new-late-night-locations-changes-to-dining-hall-options/"
      }
    },
    {
      "type": 4,
      "data":{
        "name":"Wyatt: Non-black students can easily improve Blowout atmosphere by omitting the N-word",
        "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/AO_YoungThug_WEB-1-900x600.jpg",
        "link": "http://dailynorthwestern.com/2016/09/29/opinion/non-black-students-can-easily-improve-blowout-atmosphere-by-omitting-the-n-word/"
      }
    },
    {
      "type": 4,
      "data":{
        "name":"Northwestern student Chuyuan Qiu remembered for sense of wonder, playful humor",
        "img":"http://dailynorthwestern.com/wp-content/uploads/2016/09/CHU_YunQi_WEB-600x900.jpg",
        "link": "http://dailynorthwestern.com/2016/09/29/campus/northwestern-student-chuyuan-qiu-remembered-for-sense-of-wonder-playful-humor/"
      }
    }
  ];

  $scope.openLink = function() {
    window.open("https://google.com", '_blank', 'location=no');
  }

}]);
