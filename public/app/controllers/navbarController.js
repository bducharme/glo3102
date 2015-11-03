angular.module('cornpub')
    .controller('NavbarCtrl', function ($scope, $http, SearchStringService, baseURL) {
        'use strict';

        $scope.SearchStringService = SearchStringService;

        $scope.getMovies = function() {
          return $http.get(baseURL + '/unsecure/search', {
            params: {
              q: SearchStringService.searchString
            }
          }).then(function(response){
            return response.data.results.map(function (movie) {
              console.log(movie.trackName || movie.artistName);
              return movie.trackName || movie.artistName;

            });
          });
        };

    });
