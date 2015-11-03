angular.module('cornpub', ['ngResource', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination'])
  .constant('baseURL', "http://localhost:3000")
  //.constant('baseURL', "https://umovie.herokuapp.com")

  .config(function($logProvider) {
    'use strict';

    $logProvider.debugEnabled(true);
  });



