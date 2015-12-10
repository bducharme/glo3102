angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService, SearchServiceUser, SearchStringService) {
        'use strict';

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        var doSearch = function(){
            $scope.currentPage = 1;
            populateResults();
            populateUsers();
        };

        var populateResults = function(){
            SearchService.query({
                q: SearchStringService.searchString,
                limit: 100,
                entity: 'movieArtist,movie,tvSeason'
            }, function(response) {
                $scope.searchResults = [];
                $scope.searchResults.push(response);
            });
        };
        var populateUsers = function(){
            SearchServiceUser.query({
                q: SearchStringService.searchString
            }, function(response) {
                $scope.searchUsersResults = [];
                $scope.searchUsersResults.push(response);
            });
        };

        $scope.$on('search', doSearch);

        doSearch();
    });
