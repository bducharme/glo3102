angular.module('cornpub')
    .controller('TVshowCtrl', function ($scope, $stateParams, TVshowService, TVshowServiceEpisodes) {
        'use strict';

        $scope.TVshowEpisodes = [];

        TVshowService.get({
            id: $stateParams.seasonId
        }, function(season) {
            var seasonResult = [];
            var showName = season.results[0].artistName + ", Season ";
            for(var seasons = 1; seasons < season.results.length; seasons++) {
                if(showName.length == season.results[seasons].collectionName.length + 1){
                    season.results[seasons].numSeason = parseInt(season.results[seasons].collectionName.substring(showName.length, showName.length + 1));
                    $scope.getEpisodesList(season.results[seasons].collectionId);
                    season.results[seasons].episodes = $scope.TVshowEpisodes;
                }
                else{
                    season.results[seasons].numSeason = parseInt(season.results[seasons].collectionName.substring(showName.length, showName.length + 2));
                    $scope.getEpisodesList(season.results[seasons].collectionId);
                    season.results[seasons].episodes = $scope.TVshowEpisodes;
                }
                seasonResult.push(season.results[seasons]);
            }
            $scope.TVshowSeason = seasonResult;
            $scope.TVshowInfo = season.results[0];
        });



        $scope.getEpisodesList = function(seasonId) {
            TVshowServiceEpisodes.get({
                id: seasonId
            },function(episode) {
                $scope.TVshowEpisodes = episode.results;
            });
        };
    });
