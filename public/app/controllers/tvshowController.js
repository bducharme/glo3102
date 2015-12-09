angular.module('cornpub')
    .controller('TVshowCtrl', function ($scope, $stateParams, TVshowService, TVshowServiceEpisodes, PreviewService) {
        'use strict';

        $scope.TVshowEpisodes = [];

        TVshowService.get({
            id: $stateParams.seasonId
        }, function(season) {
            var seasonResult = [];
            var showName = season.results[0].artistName + ", Season ";
            $scope.getVideoLink(season.results[0].artistName);

            for(var seasons = 1; seasons < season.results.length; seasons++) {
                $scope.getEpisodesList(season.results[seasons].collectionId);
                if(showName.length == season.results[seasons].collectionName.length + 1){
                    season.results[seasons].numSeason = parseInt(season.results[seasons].collectionName.substring(showName.length, showName.length + 1));
                }
                else{
                    season.results[seasons].numSeason = parseInt(season.results[seasons].collectionName.substring(showName.length, showName.length + 2));
                }
                seasonResult.push(season.results[seasons]);
            }
            seasonResult[0].artworkUrl500 = seasonResult[0].artworkUrl100.substring(0, seasonResult[0].artworkUrl100.length - 13)+"500x500bb.jpg";
            $scope.TVshowSeason = seasonResult;

            $scope.TVshowInfo = season.results[0];
        });

        $scope.getEpisodesList = function(seasonId) {
            TVshowServiceEpisodes.get({
                id: seasonId
            },function(episodes) {
                (episodes.results).forEach(function(episode) {
                    $scope.TVshowEpisodes.push(episode);
                })
            });
        };

        $scope.getVideoLink = function(videoName) {
            PreviewService.get({
                mediaName: videoName
            }, function(preview){
                $scope.videoLink = "http://www.youtube.com/embed/" + preview.items[0].id.videoId;
            });
        }

        $scope.selectEpisode = function(episode) {
            $scope.seasonNameToShow = episode.trackCensoredName;
            $scope.episodeToShow = episode.trackName;
            $scope.episodeDescription = episode.longDescription;
            $scope.episodeDuration = $scope.milliToTime(episode.trackTimeMillis);
            $scope.getVideoLink(episode.trackCensoredName + "-" + episode.trackName);
            $('#episodeModal').modal('show');
        }

        $scope.milliToTime = function(timeInMilli) {
            var milliseconds = timeInMilli % 1000;
            var seconds = Math.floor((timeInMilli / 1000) % 60);
            var minutes = Math.floor((timeInMilli / (60 * 1000)) % 60);
            return minutes + ":" + seconds;
        }
    });
