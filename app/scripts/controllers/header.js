'use strict';

/**
 * @ngdoc function
 * @name 50movesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 50movesApp
 */
angular.module('50movesApp')
  .controller('HeaderCtrl', function ($scope, Auth) {

    $scope.logout = function() { Auth.$unauth(); };

  });