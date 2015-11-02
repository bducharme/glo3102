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
        templateUrl: 'views/actor.html'
      })
      .state('movie', {
        url: '/movie',
        templateUrl: 'views/movie.html'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        Controller: 'SearchCtrl'
      })
      .state('tvshow', {
        url: '/tvshow',
        templateUrl: 'views/tvshow.html'
      })
      .state('watchlists', {
        url: '/watchlists',
        templateUrl: 'views/watchlists.html',
        controller: 'WatchlistsCtrl'
      });
  });
