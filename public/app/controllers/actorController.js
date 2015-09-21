'use strict'

angular.module('cornpub')
    .controller('ActorController', ['$scope', 'BackgroundService',
        function($scope, backgroundService) {
            backgroundService.setCurrentBg('');
        }
    ]);
