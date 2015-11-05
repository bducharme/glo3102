angular.module('cornpub')
    .controller('TVshowCtrl', function ($scope, $stateParams, TVshowService, TVshowServiceEpisodes) {
        'use strict';

        TVshowService.get({
            id: $stateParams.seasonId
        }, function(season) {
            var seasonResult = [];
            for(var seasons = 1; seasons < season.results.length; seasons++) {
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
