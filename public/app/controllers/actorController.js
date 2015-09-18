'use strict'

angular.module('cornpub')
    .controller('TvshowController', ['$scope', 'BackgroundService',
        function($scope, backgroundService) {
            backgroundService.setCurrentBg('');
        }
    ]);