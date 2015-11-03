angular.module('cornpub')
  .factory('TVshowService', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/tvshows/season/:id', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('TVshowServiceEpisodes', function($resource){
     return $resource('http://localhost:3000/unsecure/tvshows/season/:id/episodes', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  });