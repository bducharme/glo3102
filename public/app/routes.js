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
        url: '/actor/:actorId',
        templateUrl: 'views/actor.html'
      })
      .state('movie', {
        url: '/movie/:movieId',
        templateUrl: 'views/movie.html',
        controller: 'movieController'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
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
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/user/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/user/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'views/user/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      });

    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
  });
