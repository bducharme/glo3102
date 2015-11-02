angular.module('cornpub')
    .service('SearchService', ['$http', function($http) {
        this.search = function(query) {
            $http.get('http://localhost:3000/unsecure/search?q=saw&limit=10')
                .success(function(data, status, headers, config) {
                    return data;
            });
        };
    }]);