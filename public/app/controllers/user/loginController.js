angular.module('cornpub')
  .controller('LoginCtrl', function ($scope, $auth, $state) {
    'use strict';

    $scope.login = function() {
      $auth.login($scope.user)
        .then(function (response) {
          $auth.setToken(response);
          $state.go('profile');
        }).catch(function () {
          $scope.serverErrors = {
            "loginError" : 'Wrong email and/or password'
          };
        });
    }
  });
