angular.module('cornpub', ['ui.router','ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('actor', {
                url: '/actor',
                templateUrl: 'views/actor.html'
            })
            .state('movie', {
                url: '/movie',
                templateUrl: 'views/movies/movie.html'
            })
            .state('tvshow', {
                url: '/tvshow',
                templateUrl: 'views/tvshow.html'
            });
    });
