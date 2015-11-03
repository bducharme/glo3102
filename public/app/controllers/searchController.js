angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService, SearchStringService) {
        'use strict';

        var doSearch = function(){
            SearchService.query({
                q: SearchStringService.searchString
            }, function(response) {
                $scope.searchResults = [];
                $scope.searchResults.push(response);
            });
        };

        $scope.$on('search', doSearch);

        doSearch();
        console.log('here');
    });
