
var addressApp = angular.module('AddressApp', ['ui.bootstrap', 'ngRoute', 'sailsResource', 'ngMessages']);

addressApp.run(function()
{
    console.log("fuck yeah");
});

addressApp.config(['$routeProvider', '$locationProvider', 'sailsResourceProvider', function($routeProvider, $locationProvider, sailsResourceProvider)
{
    sailsResourceProvider.configuration =
    {
        prefix: '/api',
        verbose: true
    };
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
    .when('/',
    {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    })
    .when('/about',
    {
        templateUrl: '/views/about.html',
        controller: 'HomeCtrl'
    })
    .when('/person/:id',
    {
        templateUrl: 'views/person/show.html',
        controller: 'PersonShowCtrl'
    })
    .when('/person/new',
    {
        templateUrl: 'views/person/new.html',
        controller: 'PersonNewCtrl'
    })
    
    .otherwise(
    {
        templateUrl: 'views/404.html'
    });
}]);
