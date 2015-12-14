angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, FriendFactory, SearchService, SearchServiceUser, SearchStringService, SearchServiceActor, md5) {
        'use strict';

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.follow = function(id) {
          FriendFactory.save({
            id: id
          }, function () {
           // $scope.following.unshift($scope.user);
          });
        };

        var doSearch = function(){
            $scope.currentPage = 1;
            populateResults();
            populateUsers();
        };

        var populateResults = function(){
            SearchService.query({
                q: SearchStringService.searchString,
                limit: 100
            }, function(response) {
                SearchServiceActor.query({
                    q: SearchStringService.searchString,
                    limit: 100
                }, function(response2) {
                    $scope.searchResults = [];
                    response.results = response.results.concat(response2.results);
                    $scope.searchResults.push(response);
                });
            });
        };

        var populateResults = function(){
          SearchService.query({
            q: SearchStringService.searchString,
            limit: 100
          }, function(response) {
              $scope.searchResults = [];
              response.results = response.results.concat(response.results);
              $scope.searchResults.push(response);
            });
        };

        var populateUsers = function(){
            if (SearchStringService.searchString!==''){
                SearchServiceUser.query({
                    q: SearchStringService.searchString
                }, function(response) {
                    $scope.searchUsersResults = [];
                    $scope.searchUsersResults.push(response);
                });
            }
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
