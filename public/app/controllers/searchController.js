angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService) {
        'use strict';

        $scope.searchResults = [];

        $scope.getResults = function () {
            //$scope.searchResults = SearchFactory.get();
            $.ajax({
                url: "http://localhost:3000/unsecure/search?q=saw&limit=10",
                async : true,
                success: function(result){
                    $scope.searchResults = result.results;
            }});
            return $scope.searchResults;
        };
        $scope.getResults();
    })
;