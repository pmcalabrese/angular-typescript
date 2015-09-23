var App;
(function (App) {
    'use strict';
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ui.router',
        'HomeComponent',
        'Common.Directives.editelem',
        'WebsiteService',
        'StorageService'
    ]).
        config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$compileProvider', Config]).
        run(['$state', Run]);
    function Config($locationProvider, $stateProvider, $urlRouterProvider, $compileProvider) {
        console.log("config");
        $compileProvider.debugInfoEnabled(true);
        $stateProvider.
            state('home', {
            url: "/",
            templateUrl: "home/home.html",
            controller: 'HomeController',
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise("/");
    }
    function Run($state) {
        console.log("run");
    }
})(App || (App = {}));
