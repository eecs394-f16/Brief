angular.module('brief').controller('NewsController', ['$scope', function($scope) {
  $scope.news = {
  "entries": [
    {
      "description": "A recent study by two Medill professors revealed a group of politically disengaged voters that may not have been represented in past polls but could prove crucial to the 2016 presidential election. Medill Profs. Martin Block and Don Schultz conducted a large-scale online media study that discovered nearly 30 percent of participants chose not to [&#8230;]", 
      "link": "https://dailynorthwestern.com/2016/10/18/campus/medill-profs-pinpoint-voter-population-that-may-not-be-represented-in-polls/", 
      "published": "Wed, 19 Oct 2016 02:34:58 +0000", 
      "title": "Medill profs pinpoint voter population that may not be represented in polls"
    }, 
    {
      "description": "Despite intermittent workshops designed to give men on our campus, especially fraternity men, a well-rounded understanding of consent and power dynamics, sexual assault and rape is far too common Northwestern. We must improve the way student groups present anti-rape discourse for men and add workshops that focus on the deconstruction of toxic masculinity. To curb [&#8230;]", 
      "link": "https://dailynorthwestern.com/2016/10/18/opinion/williams-fraternity-members-should-join-call-for-improved-mars-workshops/", 
      "published": "Wed, 19 Oct 2016 02:25:16 +0000", 
      "title": "Williams: Fraternity members should join call for improved MARS workshops"
    }, 
    {
      "description": "We failed you, Northwestern, and we can be better. Men Against Rape and Sexual Assault, known as MARS around campus, started in 2010 as a half-dozen guys who saw sexual assault as inherently a men&#8217;s issue. In an effort to stand up to sexual violence, they developed a presentation to deliver to Interfraternity Council pledge [&#8230;]", 
      "link": "https://dailynorthwestern.com/2016/10/18/opinion/letter-to-the-editor-a-response-from-mars-executive-board/", 
      "published": "Wed, 19 Oct 2016 02:17:23 +0000", 
      "title": "Letter to the Editor: A response from MARS executive board"
    }, 
    {
      "description": "City Council is preparing Evanston\u2019s budget for next year as aldermen heard presentations breaking down the budget for the 2017 fiscal year Monday. One of the most discussed topics during the presentation was the need for affordable housing funding. For the fiscal year 2017, affordable housing in Evanston will need an increase of at least [&#8230;]", 
      "link": "https://dailynorthwestern.com/2016/10/18/city/council-city-staff-discuss-proposed-boost-to-housing-fund/", 
      "published": "Tue, 18 Oct 2016 06:59:47 +0000", 
      "title": "Council, city staff discuss proposed boost to housing fund"
    }, 
    {
      "description": "Aldermen discussed the details of two-way bike lanes and unanimously approved a motion to consider reducing the Sheridan Road speed limit to 25 mph at a City Council meeting Monday. Conversation surrounding the bike lanes was renewed last month after the death of Northwestern first-year student Chuyuan \u201cChu\u201d Qiu, who was killed after being struck [&#8230;]", 
      "link": "https://dailynorthwestern.com/2016/10/18/city/aldermen-express-concern-about-sheridan-bike-lane-project-approve-motion-to-lower-speed-limit/", 
      "published": "Tue, 18 Oct 2016 06:21:32 +0000", 
      "title": "Aldermen express concern about Sheridan bike lane project, show support for lower speed limit"
    }, 
    {
      "description": "Although Sammy Cuautle initially wanted to vote for Rand Paul in the Republican primary, there were only three options left when he went to vote in Illinois: Gov. John Kasich, Sen. Ted Cruz and Donald Trump. Cuautle ended up voting for Kasich because he said he didn\u2019t want to tell people he had voted for [&#8230;]", 
      "link": "https://dailynorthwestern.com/2016/10/18/campus/students-backing-trump-criticize-nominees-comments-but-still-plan-to-vote-for-him/", 
      "published": "Tue, 18 Oct 2016 05:27:48 +0000", 
      "title": "Students backing Trump criticize nominee\u2019s comments, but still plan to vote for him"
    }
  ]
}
$scope.list= $scope.news.entries;

  $scope.openLink = function(url) {
    window.open(url, '_blank');
  }

}]);
