angular.module('cornpub')
    .controller('NavbarCtrl', function ($scope, $auth, SearchStringService, SearchService, Account, md5) {
        'use strict';

        $scope.SearchStringService = SearchStringService;

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        $scope.getAllTitle = function () {
            var temp = SearchService.get({
                q: SearchStringService.searchString
            }, function (response) {
                return response.results;
            });
            console.log(temp);
            return temp;
        };

        if ($auth.isAuthenticated()) {
            Account.get(function (response) {
                $scope.user = response;
                $scope.user.md5 = md5.createHash(response.email);
                $scope.$emit('user', $scope.user);
            });
        }
    });
