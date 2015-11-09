angular.module('cornpub')
  .factory('movieFactory', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/movies/:id', {}, {
      get: {method: 'GET', params: {id: '@id'}}
    });
  });

angular.module('cornpub')
  .controller('movieController', function ($scope, $stateParams, $uibModal, movieFactory) {

    movieFactory.get({
        id: $stateParams.movieId
      }, function(data) {
        $scope.movie = data.results[0];
        $scope.movie.artworkUrl500 = $scope.movie.artworkUrl100.substring(0, $scope.movie.artworkUrl100.length - 13)+"500x500bb.jpg";
      }
    );

    $scope.closeAlert = function() {
      $scope.alert = false;
    };

    $scope.$on("movieAdded", function() {
      $scope.alert = true;
    });

  });
