angular.module('cornpub')
    .controller('AccordionCtrl', ['$scope', function ($scope) {
        'use strict';

        $scope.seasons = [
            {
                number: 'Season - 1',
                episodes: [{'title': 'episode 1'}, {'title': 'episode 2'}, {'title': 'episode 3'}]
            },
            {
                number: 'Season - 2',
                episodes: [{'title': 'episode 1'}, {'title': 'episode 2'}, {'title': 'episode 3'}]
            }
        ];
    }]);
