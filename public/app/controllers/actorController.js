angular.module('cornpub')
    .controller('ActorCtrl', function ($scope, ActorFactory) {
        'use strict';

        var actorObject = {};
        $scope.actor = {};


        $scope.getActor = function (actorId) {
            actorObject= ActorFactory.get({
                id: actorId
            }, function () {
                $scope.actor = actorObject.results[0];
            });
        };

    }).controller('ActorMoviesCtrl', function ($scope, ActorMoviesFactory) {
        'use strict';
        var movies = {};
        $scope.actorMovies = {};

        $scope.getActorMovies = function(actorId) {
            movies=ActorMoviesFactory.get({
                id: actorId
            }, function () {
                $scope.actorMovies = movies.results;
            });
        };

    });