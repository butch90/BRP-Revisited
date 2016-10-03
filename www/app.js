var app = angular.module("brpApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

	$routeProvider
	.when("/",{
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/photos",{
		templateUrl: "views/photos.html",
		controller: "photosCtrl"
	})
	.when("/members",{
		templateUrl: "views/members.html",
		controller: "membersCtrl"
	})
	.otherwise({
		templateUrl: "views/home.html"
	});

	$locationProvider.html5Mode(true);
}]);



