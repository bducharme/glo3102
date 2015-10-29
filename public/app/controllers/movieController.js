var movie = angular.module('movie', []);

movie.controller('movieController', function() {
    $scope.movies = {
        'title': 'Fifty Shades of Grey',
        'previewUrl':'https://www.youtube.com/embed/dQw4w9WgXcQ'};
});