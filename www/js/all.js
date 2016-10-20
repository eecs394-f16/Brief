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
	$scope.upcoming = {
"entries": [
{
"category": "Academic",
"location": "Evanston",
"time": "ALL DAY",
"title": "Famous Failed Predictions",
"url": "http://planitpurple.northwestern.edu/event/503147"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "6:00 AM",
"title": "CYCLE EXPRESS 6:10-6:50",
"url": "http://planitpurple.northwestern.edu/event/488802"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "6:30 AM",
"title": "Clinical Curriculum (Chairman's) Conference",
"url": "http://planitpurple.northwestern.edu/event/503816"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "6:30 AM",
"title": "Joints Conference",
"url": "http://planitpurple.northwestern.edu/event/503798"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "7:00 AM",
"title": "SUNRISE YOGA",
"url": "http://planitpurple.northwestern.edu/event/489779"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "7:30 AM",
"title": "Medical Grand Rounds",
"url": "http://planitpurple.northwestern.edu/event/503126"
},
{
"category": "Academic",
"location": "Chicago",
"time": "8:00 AM",
"title": "Pediatric Firm Rounds - Outcomes Review",
"url": "http://planitpurple.northwestern.edu/event/483039"
},
{
"category": "Fine Arts",
"location": "Evanston",
"time": "8:00 AM",
"title": "You’re No One ’Til Somebody Hates You: Karen…",
"url": "http://planitpurple.northwestern.edu/event/502433"
},
{
"category": "Fine Arts",
"location": "Evanston",
"time": "8:30 AM",
"title": "Dawes Delivers the Vote: A Glimpse at Elections, 1896-1924",
"url": "http://planitpurple.northwestern.edu/event/499174"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "8:30 AM",
"title": "Zumba Gold",
"url": "http://planitpurple.northwestern.edu/event/502799"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "9:00 AM",
"title": "Primetime Strength & Stretch",
"url": "http://planitpurple.northwestern.edu/event/502821"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "9:15 AM",
"title": "Flu Shot Clinics",
"url": "http://planitpurple.northwestern.edu/event/501271"
},
{
"category": "Fine Arts",
"location": "Evanston",
"time": "10:00 AM",
"title": "Keep the Shadow, Ere the Substance Fade: Mourning during…",
"url": "http://planitpurple.northwestern.edu/event/498549"
},
{
"category": "Academic",
"location": "Online",
"time": "10:00 AM",
"title": "MEM Online Information Session",
"url": "http://planitpurple.northwestern.edu/event/503391"
},
{
"category": "Fine Arts",
"location": "Evanston",
"time": "10:00 AM",
"title": "Salaam Cinema! 50 Years of Iranian Movie Posters",
"url": "http://planitpurple.northwestern.edu/event/499870"
},
{
"category": "Fine Arts",
"location": "Evanston",
"time": "10:00 AM",
"title": "Tseng Kwong Chi: Performing for the Camera",
"url": "http://planitpurple.northwestern.edu/event/498475"
},
{
"category": "Other",
"location": "Evanston",
"time": "10:30 AM",
"title": "Amazon Meet & Greet",
"url": "http://planitpurple.northwestern.edu/event/504230"
},
{
"category": "Other",
"location": "Evanston",
"time": "11:00 AM",
"title": "Health & Benefits Fair",
"url": "http://planitpurple.northwestern.edu/event/502746"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "11:00 AM",
"title": "High Intensity Interval Training (HIIT)",
"url": "http://planitpurple.northwestern.edu/event/502941"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "11:30 AM",
"title": "Core Conditioning",
"url": "http://planitpurple.northwestern.edu/event/502996"
},
{
"category": "Global & Civic Engagement",
"location": "Chicago",
"time": "NOON",
"title": "Author Talk: \"The Embassy\" with Dante Paradiso",
"url": "http://planitpurple.northwestern.edu/event/503476"
},
{
"category": "Academic",
"location": "Chicago",
"time": "NOON",
"title": "Class of 2020 Global Health Information Session",
"url": "http://planitpurple.northwestern.edu/event/501121"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "NOON",
"title": "CYCLE EXPRESS 12-12:50pm",
"url": "http://planitpurple.northwestern.edu/event/488914"
},
{
"category": "Academic",
"location": "Evanston",
"time": "NOON",
"title": "Faculty Lunch Seminar: Faculty Meeting",
"url": "http://planitpurple.northwestern.edu/event/500583"
},
{
"category": "Academic",
"location": "Evanston",
"time": "NOON",
"title": "Grad and Postdoc Workshop - The Digital Age and Active…",
"url": "http://planitpurple.northwestern.edu/event/502353"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "NOON",
"title": "Hatha Yoga",
"url": "http://planitpurple.northwestern.edu/event/499755"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "NOON",
"title": "How Ebola Virus Evades Host Immunity: Christopher F. Basler,…",
"url": "http://planitpurple.northwestern.edu/event/501130"
},
{
"category": "Academic",
"location": "Evanston",
"time": "NOON",
"title": "MECS Brown Bag Seminar Series - Strategy Department",
"url": "http://planitpurple.northwestern.edu/event/504079"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "NOON",
"title": "Pulmonary & Critical Care Core Conference",
"url": "http://planitpurple.northwestern.edu/event/499496"
},
{
"category": "Lectures & Meetings",
"location": "Evanston",
"time": "NOON",
"title": "SPIE-MRSEC Student Seminar: Zhongyang Li, \"Steering…",
"url": "http://planitpurple.northwestern.edu/event/504262"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "NOON",
"title": "Statistically Speaking presented by Biostatistics Collaboration…",
"url": "http://planitpurple.northwestern.edu/event/502597"
},
{
"category": "Academic",
"location": "Evanston",
"time": "12:15 PM",
"title": "Migration from Eastern Europe lecture (CCHS)",
"url": "http://planitpurple.northwestern.edu/event/502847"
},
{
"category": "Other",
"location": "Evanston",
"time": "12:30 PM",
"title": "Career Advising Walk-in Hours",
"url": "http://planitpurple.northwestern.edu/event/502335"
},
{
"category": "Lectures & Meetings",
"location": "Evanston",
"time": "12:45 PM",
"title": "Neurobiology Seminar Series | Anthony Ricci, PhD | Stanford…",
"url": "http://planitpurple.northwestern.edu/event/501429"
},
{
"category": "Academic",
"location": "Evanston",
"time": "1:00 PM",
"title": "McCormick Advising Walk-In Hours",
"url": "http://planitpurple.northwestern.edu/event/502899"
},
{
"category": "Multicultural & Diversity",
"location": "Chicago",
"time": "1:30 PM",
"title": "Medical Spanish Practice at Clinical Education Center (CEC)",
"url": "http://planitpurple.northwestern.edu/event/501305"
},
{
"category": "Academic",
"location": "Evanston",
"time": "2:00 PM",
"title": "Tech Tutoring",
"url": "http://planitpurple.northwestern.edu/event/502250"
},
{
"category": "Training",
"location": "Evanston",
"time": "3:00 PM",
"title": "Amazon Information Session",
"url": "http://planitpurple.northwestern.edu/event/504231"
},
{
"category": "Academic",
"location": "Chicago",
"time": "3:30 PM",
"title": "Lectures in Life Sciences (LLS)  Charles Serhan",
"url": "http://planitpurple.northwestern.edu/event/503523"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "3:30 PM",
"title": "National Work & Family Month - “Dad Wants to…",
"url": "http://planitpurple.northwestern.edu/event/501633"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "3:30 PM",
"title": "Taking Responsibility for Responsible Conduct of Research",
"url": "http://planitpurple.northwestern.edu/event/504029"
},
{
"category": "Academic",
"location": "Evanston",
"time": "3:30 PM",
"title": "Workshop in Econometrics",
"url": "http://planitpurple.northwestern.edu/event/500415"
},
{
"category": "Training",
"location": "Evanston",
"time": "4:00 PM",
"title": "Blue Jeans in Canvas",
"url": "http://planitpurple.northwestern.edu/event/501930"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "4:00 PM",
"title": "\"Chasing Men on Fire: Na Channels from the Squid toward…",
"url": "http://planitpurple.northwestern.edu/event/503714"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "4:00 PM",
"title": "\"Chasing Men on Fire: Na Channels from the Squid toward…",
"url": "http://planitpurple.northwestern.edu/event/503378"
},
{
"category": "Academic",
"location": "Evanston",
"time": "4:00 PM",
"title": "Forum Language Tables: Arabic, Chinese, Hindi-Urdu, Italian,…",
"url": "http://planitpurple.northwestern.edu/event/502732"
},
{
"category": "Training",
"location": "Evanston",
"time": "4:00 PM",
"title": "J-1 Orientation",
"url": "http://planitpurple.northwestern.edu/event/503115"
},
{
"category": "Academic",
"location": "Evanston",
"time": "4:00 PM",
"title": "Jason Salavon - Artist Talk",
"url": "http://planitpurple.northwestern.edu/event/501187"
},
{
"category": "Training",
"location": "Evanston",
"time": "4:00 PM",
"title": "McDonnell Boehnen Hulbert & Berghoff, LLP Info Session",
"url": "http://planitpurple.northwestern.edu/event/503878"
},
{
"category": "Lectures & Meetings",
"location": "Evanston",
"time": "4:00 PM",
"title": "MSE Colloquium: Engineering New Functional Materials for…",
"url": "http://planitpurple.northwestern.edu/event/502056"
},
{
"category": "Academic",
"location": "Evanston",
"time": "4:00 PM",
"title": "Priti Shah",
"url": "http://planitpurple.northwestern.edu/event/500019"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "4:00 PM",
"title": "TIME Lecture: Diversity Recruitment and Retention in Medical…",
"url": "http://planitpurple.northwestern.edu/event/500682"
},
{
"category": "Other",
"location": "Evanston",
"time": "5:00 PM",
"title": "Beginning Ceramics Mini Course Section A",
"url": "http://planitpurple.northwestern.edu/event/500741"
},
{
"category": "Lectures & Meetings",
"location": "Chicago",
"time": "5:00 PM",
"title": "Fracture Conference",
"url": "http://planitpurple.northwestern.edu/event/503812"
},
{
"category": "Academic",
"location": "Evanston",
"time": "5:00 PM",
"title": "Global Cafe - Refugee Resettlement in the U.S.; Serving…",
"url": "http://planitpurple.northwestern.edu/event/504283"
},
{
"category": "Lectures & Meetings",
"location": "No Location",
"time": "5:00 PM",
"title": "Information Session: Organisation for Economic Cooperation…",
"url": "http://planitpurple.northwestern.edu/event/501775"
},
{
"category": "Lectures & Meetings",
"location": "No Location",
"time": "5:00 PM",
"title": "Info Session: Amazon",
"url": "http://planitpurple.northwestern.edu/event/503827"
},
{
"category": "Lectures & Meetings",
"location": "Evanston",
"time": "5:00 PM",
"title": "MS in Higher Education Administration and Policy Program…",
"url": "http://planitpurple.northwestern.edu/event/500257"
},
{
"category": "Other",
"location": "Evanston",
"time": "5:00 PM",
"title": "Women in Leadership Cohort Begins",
"url": "http://planitpurple.northwestern.edu/event/503253"
},
{
"category": "Academic",
"location": "Chicago",
"time": "5:15 PM",
"title": "Faculty Development Workshop -- Creating Supportive Learning…",
"url": "http://planitpurple.northwestern.edu/event/503903"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "5:30 PM",
"title": "BODYPUMP™",
"url": "http://planitpurple.northwestern.edu/event/489443"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "5:30 PM",
"title": "Cycle Challenge",
"url": "http://planitpurple.northwestern.edu/event/502760"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "5:30 PM",
"title": "Intro to Ashtanga Yoga",
"url": "http://planitpurple.northwestern.edu/event/503014"
},
{
"category": "Lectures & Meetings",
"location": "Evanston",
"time": "5:30 PM",
"title": "Pre-Veterinary Presentation: Antibiotics & Food Animal…",
"url": "http://planitpurple.northwestern.edu/event/502407"
},
{
"category": "Other",
"location": "Evanston",
"time": "6:00 PM",
"title": "Boeing Information Session",
"url": "http://planitpurple.northwestern.edu/event/504097"
},
{
"category": "Academic",
"location": "Evanston",
"time": "6:00 PM",
"title": "Intro to Logic Tutoring",
"url": "http://planitpurple.northwestern.edu/event/503427"
},
{
"category": "Other",
"location": "Evanston",
"time": "6:00 PM",
"title": "Sketchbook 1: Graphite & Charcoal Drawing Mini Course",
"url": "http://planitpurple.northwestern.edu/event/500723"
},
{
"category": "Academic",
"location": "Chicago",
"time": "6:30 PM",
"title": "Division of Plastic Surgery- Journal Club",
"url": "http://planitpurple.northwestern.edu/event/479026"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "7:00 PM",
"title": "PILATES",
"url": "http://planitpurple.northwestern.edu/event/503025"
},
{
"category": "Academic",
"location": "Evanston",
"time": "7:00 PM",
"title": "Tech Tutoring",
"url": "http://planitpurple.northwestern.edu/event/502290"
},
{
"category": "Other",
"location": "Evanston",
"time": "7:00 PM",
"title": "United Airlines Info Session",
"url": "http://planitpurple.northwestern.edu/event/504229"
},
{
"category": "Fitness & Recreation",
"location": "Evanston",
"time": "7:00 PM",
"title": "Zumba",
"url": "http://planitpurple.northwestern.edu/event/503036"
},
{
"category": "Other",
"location": "Evanston",
"time": "7:30 PM",
"title": "Beginning Spanish Mini Course",
"url": "http://planitpurple.northwestern.edu/event/500864"
},
{
"category": "Fine Arts",
"location": "Evanston",
"time": "7:30 PM",
"title": "Bienen School of Music Quartet-in-Residence: Dover Quartet",
"url": "http://planitpurple.northwestern.edu/event/501174"
},
{
"category": "Other",
"location": "Evanston",
"time": "7:30 PM",
"title": "Wine Appreciation Mini Course Section A",
"url": "http://planitpurple.northwestern.edu/event/500847"
},
{
"category": "Lectures & Meetings",
"location": "Online",
"time": "8:00 PM",
"title": "Certificate in Higher Education Virtual Program Preview",
"url": "http://planitpurple.northwestern.edu/event/500260"
},
{
"category": "Academic",
"location": "Evanston",
"time": "8:00 PM",
"title": "Tech - Calc, Chem & Physics Undergrad Tutoring Room",
"url": "http://planitpurple.northwestern.edu/event/502182"
}
]
};
	$scope.listUp = $scope.upcoming.entries;
	
	$scope.openLink = function(url) {
    window.open(url, '_blank');
  }
	
}]);
angular.module('brief').controller('WeatherController', ['$scope', function($scope, $http) {
    $scope.weather =
	$scope.class = "clouds-bg";
	
	$http({
		method: 'GET',
		url: '/weather.json'
	}).then(function success(response){
		$scope.weather = response;
	});
}]);
