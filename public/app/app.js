'use strict';

angular.module('cornpub', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home')
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .state('actor', {
                url: '/actor',
                templateUrl: 'views/actor.html',
                controller: 'ActorController'
            })
            .state('movie', {
                url: '/movie',
                templateUrl: 'views/movie.html',
                controller: 'MovieController'
            })
            .state('tvshow', {
                url: '/tvshow',
                templateUrl: 'views/tvshow.html',
                controller: 'TvshowController'
            })

    })
