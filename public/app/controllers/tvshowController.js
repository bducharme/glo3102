angular.module('cornpub')
    .controller('TVshowCtrl', function ($scope, $stateParams, TVshowService, TVshowServiceEpisodes) {
        'use strict';

        TVshowService.get({
            id: $stateParams.seasonId
        }, function(season) {
            var seasonResult = [];
            var showName = season.results[0].artistName + ", Season ";
            for(var seasons = 1; seasons < season.results.length; seasons++) {
                if(showName.length == season.results[seasons].collectionName.length + 1)
                    season.results[seasons].numSeason = parseInt(season.results[seasons].collectionName.substring(showName.length, showName.length + 1));
                else
                    season.results[seasons].numSeason = parseInt(season.results[seasons].collectionName.substring(showName.length, showName.length + 2));

                seasonResult.push(season.results[seasons]);
            }
            $scope.TVshowSeason = seasonResult;
            $scope.TVshowInfo = season.results[0];
        });

        TVshowServiceEpisodes.get({
            id: $stateParams.seasonId
        },function(episode) {
            $scope.TVshowEpisodes = episode.results;
        });
    });
