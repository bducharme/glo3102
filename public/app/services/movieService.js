angular.module('cornpub')
    .factory('movieFactory', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/movies/:id', {}, {
            get: {method: 'GET', params: {id: '@id'}}
        });
    });
