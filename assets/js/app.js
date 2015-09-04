
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
    .when('/person/new',        // new person
    {
        templateUrl: 'views/person/new.html',
        controller: 'PersonNewCtrl'
    })
    .when('/person/:id/edit',   // edit person
    {
        templateUrl: 'views/person/edit.html',
        controller: 'PersonEditCtrl'
    })
    .when('/info/:id/edit',     // edit contact info
    {
        templateUrl: 'views/contactInfo/edit.html',
        controller: 'ContactInfoEditCtrl'
    })
    .when('/person/:id/info/:infoId',   // show person with specific contact info chosen
    {
        templateUrl: 'views/person/show.html',
        controller: 'PersonShowCtrl'
    })
    .when('/person/:id',    // show person with leftmost contact info tab chosen
    {
        templateUrl: 'views/person/show.html',
        controller: 'PersonShowCtrl'
    })
    
    .otherwise(
    {
        templateUrl: 'views/404.html'
    });
}]);
