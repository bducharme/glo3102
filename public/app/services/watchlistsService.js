angular.module('cornpub')
  .factory('WatchlistsFactory', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/watchlists', {}, {
    //return $resource('https://umovie.herokuapp.com/unsecure/watchlists', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  })
  .factory('WatchlistFactory', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/watchlists/:id', {}, {
    //return $resource('https://umovie.herokuapp.com/unsecure/watchlists/:id', {}, {
      get: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    });
  })
  .factory('WatchlistMovieFactory', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/watchlists/:id/movies/:trackId', {}, {
      //return $resource('https://umovie.herokuapp.com/unsecure/watchlists/:id/movies/:trackId', {}, {
      delete: { method: 'DELETE', params: {id: '@id', trackId: '@trackId'} }
    });
  });
