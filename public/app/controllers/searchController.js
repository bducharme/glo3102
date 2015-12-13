angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService, SearchServiceUser, SearchStringService, md5) {
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

                //$scope.user.md5 = md5.createHash(response.email);
                $scope.searchUsersResults.push(response);
            });
        };

        $scope.$on('search', doSearch);

        doSearch();

        $scope.getGravatar = function(email){
            return 'http://www.gravatar.com/avatar/'+md5.createHash(email);
        }
    }).directive('resultdetailsmovie', function() {
        return {
            templateUrl: function(){
                return 'template/result-details-movie.html';
            }
        };
    }).directive('resultdetailsartist', function() {
        return {
            templateUrl: function(){
                return 'template/result-details-actor.html';
            }
        };
    }).directive('resultdetailstvshow', function() {
        return {
            templateUrl: function(){
                return 'template/result-details-tvshow.html';
            }
        };
    });
