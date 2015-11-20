angular.module('cornpub')
    .controller('NavbarCtrl', function ($scope, $auth, SearchStringService, Account) {
        'use strict';

        $scope.SearchStringService = SearchStringService;

        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        if ($auth.isAuthenticated()) {
          Account.get(function(response) {
            $scope.user = response;
          });
        }

    });
