angular.module('cornpub')
  .factory('WatchlistsFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/unsecure/watchlists', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  })
  .factory('WatchlistFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/unsecure/watchlists/:id', {}, {
      get: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    });
  })
  .factory('WatchlistMovieFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/unsecure/watchlists/:id/movies/:trackId', {}, {
      delete: { method: 'DELETE', params: {id: '@id', trackId: '@trackId'} }
    });
  });
