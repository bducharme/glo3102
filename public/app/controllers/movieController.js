angular.module('cornpub')
    .factory('movieFactory', function ($resource, baseURL) {
      'use strict';
      return $resource(baseURL +'/unsecure/movies/:id', {}, {
        get: {method: 'GET', params: {id: '@id'}}
      });
    });

angular.module('cornpub')
    .controller('movieController', function ($scope, $stateParams, $uibModal, movieFactory, PreviewService) {

      movieFactory.get({
            id: $stateParams.movieId
          }, function(data) {
            $scope.getVideoLink(data.results[0].trackCensoredName);
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

      $scope.getVideoLink = function(videoName) {
        PreviewService.get({
          mediaName: videoName
        }, function(preview){
          $scope.videoLink = "http://www.youtube.com/embed/" + preview.items[0].id.videoId;
        });
      }

    });
