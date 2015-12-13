angular.module('cornpub')
  .controller('HomeCtrl', function ($scope, UsersFactory) {
    'use strict';

    $scope.getUsers = function () {
      $scope.users = UsersFactory.query();
    };

    $scope.getUsers();

  });
