angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService, SearchStringService) {
        'use strict';

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        var doSearch = function(){
            $scope.currentPage = 1;
            SearchService.query({
                q: SearchStringService.searchString,
                limit: 100
            }, function(response) {
                $scope.searchResults = [];
                $scope.searchResults.push(response);
            });
        };

        $scope.$on('search', doSearch);

        doSearch();
    });
