
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
    .when('/person',
    {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    })
    .when('/about',
    {
        templateUrl: '/views/about.html',
        controller: 'HomeCtrl'
    })
    .when('/person/new',
    {
        templateUrl: 'views/person/new.html',
        controller: 'PersonNewCtrl'
    })
    .when('/person/:id/edit',
    {
        templateUrl: 'views/person/edit.html',
        controller: 'PersonEditCtrl'
    })
    .when('/person/:person_id/info/:id',
    {
        templateUrl: 'views/contactInfo/edit.html',
        controller: 'ContactInfoEditCtrl'
    })
    .when('/person/:id',
    {
        templateUrl: 'views/person/show.html',
        controller: 'PersonShowCtrl'
    })
    
    .otherwise(
    {
        templateUrl: 'views/404.html'
    });
}]);
