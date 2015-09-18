'use strict'

angular.module('cornpub')
    .controller('MovieController', ['$scope', 'BackgroundService',
        function($scope, backgroundService) {
            backgroundService.setCurrentBg('');
        }
    ]);