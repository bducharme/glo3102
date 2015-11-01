angular.module('cornpub')
  .factory('TVshowService', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/tvshows/season/278750007', {}, {
      //return $resource('https://umovie.herokuapp.com/unsecure/watchlists', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('TVshowServiceEpisodes', function($resource){
     return $resource('http://localhost:3000/unsecure/tvshows/season/278750007/episodes', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  });