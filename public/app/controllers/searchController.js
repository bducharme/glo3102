angular.module('cornpub')
    .controller('SearchCtrl', function($scope, FriendFactory, SearchService, SearchServiceUser, SearchStringService, SearchServiceActor, md5) {
        'use strict';

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.$on('user', function (event, user) {
            $scope.user = user;
        });

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
        };


        $scope.following = [];

        $scope.$on('user', function (event, user) {
          $scope.user = user;
          $scope.me = user;
          $scope.following = $scope.me.following;
        });

        $scope.addFriend = function(user) {
          FriendFactory.save({
            id: user.id
          }, function () {
            $scope.following.unshift(user);
          });
        };

        $scope.removeFriend = function (friend) {
          FriendFactory.remove({
            id: friend.id
          }, function () {
            var toRemove = $scope.following.filter(function(user) {
              return user.id == $scope.user.id;
            })[0];
            var index = $scope.following.indexOf(toRemove);
            $scope.following.splice(index, 1);
          });
        };

        $scope.isFriend = function(friends, friend) {
          var isFriend = false;
          if (friends !== undefined) {
            friends.forEach(function (f) {
              if(f.id === friend.id) {
                isFriend = true;
              }
            })
          }
          return isFriend;
        };





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
