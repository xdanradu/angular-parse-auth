'use strict';

/**
 * @ngdoc overview
 * @name angularParseAuthApp
 * @description
 * # angularParseAuthApp
 *
 * Main module of the application.
 */
angular
  .module('angularParseAuthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

 //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};    
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $urlRouterProvider.otherwise('/main');

 $stateProvider
    .state('about', {
      url: "/about",
      controller: 'AboutCtrl',
      templateUrl: "views/about.html"
    })
    .state('main', {
      url: "/main",
      controller: 'MainCtrl',
      templateUrl: "views/main.html"
    });

  });
