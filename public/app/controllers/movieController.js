angular.module('cornpub')
    .factory('movieFactory', function ($resource) {
        'use strict';
        return $resource('http://localhost:3000/unsecure/movies/:id', {}, {
            get: {method: 'GET', params: {id: '@id'}}
        });
    });

angular.module('cornpub')
    .controller('movieController', function ($scope, movieFactory) {
        /*
        $scope.movie = movieFactory.get(
            {id: '265727087'}
        ).results[0];
         $scope.movie =
         {
         'trackName': 'Saw',
         'previewUrl': 'http://a978.v.phobos.apple.com/us/r1000/097/Video/a6/aa/f2/mzm.jszrvyyu..640x360.h264lc.D2.p.m4v',
         'primaryGenreName': 'Horror',
         'releaseDate': '2004-10-29T07:00:00Z',
         'contentAdvisoryRating': 'R',
         'trackViewUrl': 'https://itunes.apple.com/us/movie/saw/id265727087?uo=4',
         'longDescription': 'Would you die to live? That\'s what two men, Adam (Leigh Whannell) and Gordon (Cary Elwes), have to ask themselves when they\'re paired up in a deadly situation. Abducted by a serial killer, they\'re trapped up in a prison constructed with such ingenuity that they may not be able to escape before their captor decides it\'s time to dismantle their bodies in his signature way. Attempting to break free may kill them, but staying definitely will.',
         'artworkUrl100': 'http://is2.mzstatic.com/image/pf/us/r30/Music/af/37/e2/dj.fsfobjrm.100x100-75.jpg'
         };
         */
    });


