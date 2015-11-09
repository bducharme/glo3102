angular.module('cornpub')
  .factory('movieFactory', function ($resource) {
    'use strict';
    return $resource('http://localhost:3000/unsecure/movies/:id', {}, {
      get: {method: 'GET', params: {id: '@id'}}
    });
  });

angular.module('cornpub')
  .controller('movieController', function ($scope, $uibModal, movieFactory) {

    movieFactory.get(
      {id: '265727087'},
      function(data) {
        $scope.movie = data.results[0];
      }
    );

    $scope.closeAlert = function() {
      $scope.alert = false;
    };

    $scope.$on("movieAdded", function() {
      $scope.alert = true;
    });

  });
