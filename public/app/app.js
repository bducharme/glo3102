angular.module('cornpub', ['ngResource', 'ngAnimate', 'ui.router', 'ui.bootstrap'])
  .constant('baseURL', "http://localhost:3000")
  //.constant('baseURL', "https://umovie.herokuapp.com")

  .config(function($logProvider) {
    'use strict';

    $logProvider.debugEnabled(true);
  });
