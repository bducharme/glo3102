angular.module('cornpub')
  .controller('ProfileCtrl', function ($scope, $auth, Account) {
    'use strict';

    Account.get(function(response) {
      $scope.user = response;
    });

  });
