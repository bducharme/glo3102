'use strict'

angular.module('cornpub')
    .factory('BackgroundService', [function() {
        var currentBackgroundClass = 'home-bg';
        return  {
            setCurrentBg: function(className) {
                currentBackgroundClass = className;
            },
            getCurrentBg: function() {
                return currentBackgroundClass;
            }
        };
    }]);