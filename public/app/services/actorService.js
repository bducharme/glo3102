angular.module('cornpub')
    .factory('ActorFactory', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/actors/:id', {}, {
            get: { method: 'GET' }
        });
    })
    .factory('ActorMoviesFactory', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/actors/:id/movies', {}, {
            get: {method: 'GET'}
        });
    });
