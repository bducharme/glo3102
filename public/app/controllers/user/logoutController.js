angular.module('cornpub')
  .controller('LogoutCtrl', function ($scope, $auth, $state, LogoutService) {
    'use strict';

    if (!$auth.isAuthenticated()) { return; }
    LogoutService.get();
    $auth.logout()
      .then(function() {
        $state.go('home');
      });
  });
