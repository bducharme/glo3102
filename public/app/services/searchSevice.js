angular.module('cornpub')
    .factory('SearchService', function($http) {
        return {
            search: function() {
                return $http.get('http://localhost:3000/unsecure/search?q=saw&limit=10');
            }
        }
    })
    .factory('SearchService2', function ($resource, baseURL) {
        'use strict';
        return $resource('http://localhost:3000/unsecure/search', {}, {
            query: { method: 'GET', isArray: false }
        });
    });