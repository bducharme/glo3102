angular.module('cornpub')
    .controller('NavbarCtrl', function ($timeout, $rootScope, $scope, $auth, SearchStringService, Account, md5) {
        'use strict';

        $scope.SearchStringService = SearchStringService;

        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        if ($auth.isAuthenticated()) {
          Account.get(function(response) {
            $scope.user = response;
            $scope.user.md5 = md5.createHash(response.email);
            $scope.$emit('user', $scope.user);
          });
        }







    });
