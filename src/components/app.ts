/// <reference path="../_all.d.ts"/>

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
    config(['$locationProvider','$stateProvider','$urlRouterProvider',Config]).
    run(['$state',Run]);

    function Config($locationProvider: ng.ILocationProvider, $stateProvider: angular.ui.IStateProvider ,$urlRouterProvider: angular.ui.IUrlRouterProvider): void {
        console.log("config");

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
