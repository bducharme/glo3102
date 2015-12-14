angular.module('cornpub')
    .factory('previewService', function ($resource) {
        'use strict';
        return $resource('https://www.googleapis.com/youtube/v3/search?part=:part&q=:mediaName&key=:key', {},
            {
                get: {
                    method: 'GET',
                    params: {part: 'snippet', mediaName: '@mediaName', key: 'AIzaSyDnPPr6ygLS7nY2YQ7aaMvk47l2OfFNHZI'},
                    skipAuthorization: true
                }
            });
    })
    .filter('trustThisUrl', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);