angular.module('cornpub')
  .controller('ProfileCtrl', function($scope, $stateParams, UsersFactory, FriendFactory, $timeout) {
    'use strict';

    $scope.following = [];

    $scope.$on('user', function (event, user) {
      $scope.user = user;
      $scope.me = user;
      $scope.following = $scope.me.following;
    });

    if ($stateParams.userId !== '') {
      $timeout(getUser, 10);
    }

    function getUser() {
      UsersFactory.get({
          id: $stateParams.userId
        }, function (user) {
          $scope.user = user
        }
      );
    }

    $scope.addFriend = function(userId) {
      FriendFactory.save({
        id: userId
      }, function () {
        $scope.following.unshift($scope.user);
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

    $scope.isFriend = function(friends) {
      var isFriend = false;
      if (friends !== undefined) {
        friends.forEach(function (friend) {
          if(friend.id === $scope.user.id) {
            isFriend = true;
          }
        })
      }
      return isFriend;
    };

  });
