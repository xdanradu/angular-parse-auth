'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
 angular.module('angularParseAuthApp')
 .controller('NavigationCtrl', function ($scope, $location) {

 	$scope.isActive = function(route) {
 		return route === $location.path();
 	}

 });
