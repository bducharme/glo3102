'use strict'

angular.module('cornpub')
    .controller('HomeController', ['$scope', 'BackgroundService',
        function($scope, backgroundService) {
            backgroundService.setCurrentBg('home-bg');
        }
    ]);