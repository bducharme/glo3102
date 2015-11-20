angular.module('cornpub')
  .factory('WatchlistsFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/watchlists/:id', {}, {
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} },
      create: { method: 'POST' }
    });
  })
  .factory('WatchlistMovieFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/watchlists/:id/movies/:trackId', {}, {
      delete: { method: 'DELETE', params: {id: '@id', trackId: '@trackId'} },
      create: { method: 'POST', params: {id: '@id'} }
    });
  });
