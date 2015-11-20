angular.module('cornpub')
  .controller('SignupCtrl', function ($scope, $auth, $state) {
    'use strict';

    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function() {
          $state.go('login');
        }).catch(function(response) {
          $scope.serverErrors = {
            "emailTaken": response.data
          }
        })
    }
  });

