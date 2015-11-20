angular.module('cornpub')
  .controller('ProfileCtrl', function ($scope, $auth, Account, md5) {
    'use strict';

    Account.get(function(response) {
      $scope.user = response;
      $scope.user.md5 = md5.createHash(response.email);
    });

  });
