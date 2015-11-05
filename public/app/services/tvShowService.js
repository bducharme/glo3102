angular.module('cornpub')
  .factory('TVshowService', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/unsecure/tvshows/season/:id', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('TVshowServiceEpisodes', function($resource, baseURL){
     return $resource(baseURL + '/unsecure/tvshows/season/:id/episodes', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  });