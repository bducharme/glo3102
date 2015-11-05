angular.module('cornpub')
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
        templateUrl: 'views/actor.html',
        controller: 'ActorCtrl'
      })
      .state('movie', {
        url: '/movie',
        templateUrl: 'views/movie.html'
      })
      .state('tvshow', {
        url: '/tvshow/:seasonId',
        templateUrl: 'views/tvshow.html',
        controller: 'TVshowCtrl'
      })
      .state('watchlists', {
        url: '/watchlists',
        templateUrl: 'views/watchlists.html',
        controller: 'WatchlistsCtrl'
      });
  });
