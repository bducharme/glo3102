angular.module('cornpub')
    .controller('SearchCtrl', function ($scope, SearchService2) {
        'use strict';

        $scope.searchResults = [];

        var getSearchField = function() {
            var searchField = 'saw';
            if ($scope.asdfdas!==undefined) {
                searchField = $scope.asdfdas;
            }
            return searchField;
        }

        $scope.getResults = function () {
            SearchService2.query({
                q:getSearchField()
            }, function(response){
                $scope.searchResults =response.results;
                console.log(response);
            });
            console.log($scope.searchResults);
            //$.ajax({
            //    url: "http://localhost:3000/unsecure/search?q=" + getSearchField() + "&limit=10",
            //    async : true,
            //    success: function(result){
            //        $scope.searchResults = result.results;
            //}});
            //return $scope.searchResults;
            //var promise = SearchService.search();
            //promise.then(
            //    function(payload) {
            //        $scope.searchResults = payload.data;
            //    },
            //    function(errorPayload) {
            //        console.log('failure loading results', errorPayload);
            //    });
        };

        $scope.updateSearch = function () {
            $scope.getResults();
        };

        $scope.getResults();
        console.log('here');
    })
;