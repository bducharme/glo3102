angular.module('cornpub')
  .controller('TVshowCtrl', function ($scope, $stateParams, TVshowService) {
    'use strict';



    TVshowService.get({
      id: $stateParams.seasonId
    }, function(season) {
      $scope.getTVshowsSeason1 = season.results[0];
    });


  })


  .controller('AccordionCtrl', function ($scope) {
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
    });
