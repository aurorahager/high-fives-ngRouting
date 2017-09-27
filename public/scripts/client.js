myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/partials/home.html',
        controller: 'HomeController as hc'
    }).when('/percy', {
        templateUrl: 'views/partials/percy.html',
        controller: 'PercyController as PC'
    }).when('/wonderwoman', {
        templateUrl: 'views/partials/wonder.html',
        controller: 'WonderController as WC'
    }).when('/zuko', {
        templateUrl: 'views/partials/zuko.html',
        controller: 'ZukoController as ZC'
    }).otherwise({ redirectTo: '/' });
});