angular.module('cornpub')
  .controller('ProfileCtrl', function ($scope) {
    'use strict';

    $scope.$on('user', function(event, user) {
      $scope.user = user;
    })

  });
