angular.module('cornpub')
    .controller('NavbarCtrl', function ($scope, SearchStringService) {
        'use strict';

        $scope.SearchStringService = SearchStringService;

    });
