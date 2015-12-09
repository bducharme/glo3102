angular.module('cornpub')
    .controller('movieController', function ($scope, $stateParams, movieFactory, previewService) {
        movieFactory.get({
                id: $stateParams.movieId
            }, function (data) {
                $scope.movie = data.results[0];
                $scope.movie.artworkUrl500 = $scope.movie.artworkUrl100.substring(0, $scope.movie.artworkUrl100.length - 13) + "500x500bb.jpg";
                $scope.getVideoLink($scope.movie.trackName);
            }
        );

        $scope.closeAlert = function () {
            $scope.alert = false;
        };

        $scope.$on("movieAdded", function () {
            $scope.alert = true;
        });

        $scope.$on('user', function (event, user) {
            $scope.user = user;
        });

        $scope.getVideoLink = function(videoName) {
            previewService.get({
                mediaName: videoName+'official trailer'
            }, function(preview){
                $scope.videoLink = "http://www.youtube.com/embed/" + preview.items[0].id.videoId;
            });
        }
    });


