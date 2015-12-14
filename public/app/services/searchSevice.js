angular.module('cornpub')
    .factory('SearchService', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/search', {}, {
            query: { method: 'GET' }
        });
    })
    .factory('SearchServiceActor', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/search/actors', {}, {
            query: { method: 'GET' }
        });
    })
    .factory('SearchServiceUser', function ($resource, baseURL) {
        'use strict';
        return $resource(baseURL + '/search/users', {}, {
            get: { method: 'GET' }
        });
    })
    .service('SearchStringService', [function () {
        this.searchString = "";
    }]);
