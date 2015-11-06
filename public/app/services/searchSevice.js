angular.module('cornpub')
    .factory('SearchService', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/unsecure/search', {}, {
            query: { method: 'GET' }
        });
    })

    .service('SearchStringService', [function () {
        this.searchString = "";
    }]);
