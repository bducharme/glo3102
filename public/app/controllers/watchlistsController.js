angular.module('cornpub')
  .controller('WatchlistsCtrl', function ($scope, $stateParams, WatchlistsFactory, WatchlistMovieFactory) {
    'use strict';

    $scope.watchlists = [];
    $scope.newWatchlist = { name: '' };
    $scope.addMode = false;
    $scope.hideEdit = false;
    $scope.watchlist = {};

    if ($stateParams.userId !== '') {
      $scope.hideEdit = true;
    }

    $scope.toggleAddMode = function () {
      $scope.addMode = !$scope.addMode;
      $scope.newWatchlist.name = '';
    };

    $scope.toggleEditMode = function (watchlist) {
      watchlist.editMode = !watchlist.editMode;
      if (watchlist.editMode) {
        watchlist.serverName = watchlist.name;
        $scope.watchlists.forEach(function (index) {
          if (watchlist.id !== index.id && index.editMode) {
            index.name = index.serverName;
            index.editMode = false;
          }
        });
      } else {
        watchlist.name = watchlist.serverName;
      }
    };

    $scope.createWatchlist = function (isNewWatchlistValid) {
      if (isNewWatchlistValid) {
        WatchlistsFactory.create($scope.newWatchlist,
          function (createdWatchlist) {
            $scope.watchlists.unshift(createdWatchlist);
            $scope.toggleAddMode();
          });
      }
    };

    $scope.getWatchlist = function (watchlistId) {
      WatchlistsFactory.get({
        id: watchlistId
      });
    };

    $scope.updateWatchlist = function (watchlist) {
      watchlist.editMode = false;
      WatchlistsFactory.update(watchlist);
    };

    $scope.deleteWatchlist = function (watchlist) {
      WatchlistsFactory.remove({
        id: watchlist.id
      }, function () {
        var index = $scope.watchlists.indexOf(watchlist);
        $scope.watchlists.splice(index, 1);
      });
    };

    $scope.getWatchlists = function () {
      $scope.watchlists = WatchlistsFactory.query();
    };

    $scope.updateOnEnter = function (watchlist, args) {
      if (args.keyCode == 13) {
        $scope.updateWatchlist(watchlist);
        watchlist.expanded = false;
      }
    };

    $scope.saveOnEnter = function (watchlist, args, isNewWatchlistValid ) {
      if (args.keyCode == 13) {
        $scope.createWatchlist(isNewWatchlistValid);
        watchlist.expanded = false;
      }
    };

    $scope.deleteMovie = function (watchlist, movie) {
      WatchlistMovieFactory.delete({
        id: watchlist.id,
        trackId: movie.trackId
      }, function (updatedWatchlist) {
        updatedWatchlist.expanded = true;
        var index = $scope.watchlists.indexOf(watchlist);
        $scope.watchlists[index] = updatedWatchlist;
      });
    };

    $scope.getWatchlists();
  })
  .controller('RatingCtrl', function ($scope) {
    'use strict';

    $scope.rate = 0;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
    };
  })
  .filter('millisToMin', [function() {
    return function(millis) {
      return new Date(1970, 0, 1).setSeconds(millis/1000);
    };
  }]);

