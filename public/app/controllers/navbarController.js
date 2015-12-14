angular.module('cornpub')
    .controller('NavbarCtrl', function ($http, baseURL, $timeout, $rootScope, $scope, $auth, SearchStringService, SearchService, SearchServiceActor, Account, md5) {
        'use strict';

        $scope.SearchStringService = SearchStringService;

        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        if ($auth.isAuthenticated()) {
          Account.get(function(response) {
            $scope.user = response;
            $scope.user.md5 = md5.createHash(response.email);
            $scope.$emit('user', $scope.user);
          });
        }

    var response3;

    $scope.getMovies = function() {
      return $http.get(baseURL + '/search', {
        params: {
          q: SearchStringService.searchString
        }
      }).then(function(response){
        response3 = response;
        return $http.get(baseURL + '/search/actors', {
          params: {
            q: SearchStringService.searchString
          }
        }).then(function(response2){
            return (response3.data.results.concat(response2.data.results)).map(function (data) {
               return data.trackName || data.artistName;
            });
          });
        });
      };

    });
