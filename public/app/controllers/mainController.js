'use strict'

angular.module('cornpub')
    .controller('MainController', ['$scope', 'BackgroundService',
        function($scope, backgroundService) {
            $scope.bgService = backgroundService;
        }
    ]);