angular.module('cornpub')
  .factory('TVshowService', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/unsecure/tvshows/season/:id', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('PreviewService', function ($resource, baseURL) {
    'use strict';
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=rome+trailer&key=AIzaSyCtNyLr6I_QJ5nxfO4LsJRP4Ko445wEoSI', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('TVshowServiceEpisodes', function($resource, baseURL){
     return $resource(baseURL + '/unsecure/tvshows/season/:id/episodes', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  });