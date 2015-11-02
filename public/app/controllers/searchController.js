angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService, SearchStringService) {
        'use strict';

        $scope.$on('search', function() {
            SearchService.query({
                q: SearchStringService.searchString
            }, function(response) {
                $scope.searchResults = [];
                $scope.searchResults.push(response);
            });
        });

    });
