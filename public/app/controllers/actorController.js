angular.module('cornpub')
    .controller('ActorCtrl', function ($scope, $stateParams, ActorFactory) {
        'use strict';

        var actorObject = {};
        $scope.actor = {};

        actorObject= ActorFactory.get({
            id: $stateParams.actorId
        }, function () {
            $scope.actor = actorObject.results[0];
        });

    }).controller('ActorMoviesCtrl', function ($scope, $stateParams, ActorMoviesFactory) {
        'use strict';
        var movies = {};
        $scope.actorMovies = {};

        movies=ActorMoviesFactory.get({
            id: $stateParams.actorId
        }, function () {
            $scope.actorMovies = movies.results;
        });

    });