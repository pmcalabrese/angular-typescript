/// <reference path="../_app.d.ts"/>

module App {
    'use strict';

    angular.module('app',[
        'ngRoute',
        'ngMaterial',
        'ui.router',
        'HomeComponent',
        'Common.Directives.editelem',
        'WebsiteService',
        'StorageService'
    ]).
    config(['$locationProvider','$stateProvider','$urlRouterProvider','$compileProvider',Config]).
    run(['$state',Run]);

    function Config($locationProvider: ng.ILocationProvider, $stateProvider: angular.ui.IStateProvider ,$urlRouterProvider: angular.ui.IUrlRouterProvider, $compileProvider: ng.ICompileProvider): void {
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

    function Run($state: angular.ui.IState): void {
        console.log("run");
    }
}
