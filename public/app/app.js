angular.module('cornpub', ['ngResource', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'satellizer', 'angular-md5'])
    .constant('baseURL', "http://localhost:3000")
    //.constant('baseURL', "https://umovie.herokuapp.com")

    .config(function ($logProvider, $authProvider, baseURL) {
        'use strict';

        $authProvider.baseUrl = baseURL;
        $authProvider.loginUrl = '/login';
        $authProvider.signupUrl = '/signup';
        $authProvider.authHeader = 'authorization';
        $authProvider.authToken = '';

        $logProvider.debugEnabled(true);
    });
