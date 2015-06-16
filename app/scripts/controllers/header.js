'use strict';

/**
 * @ngdoc function
 * @name 50movesApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the 50movesApp
 */

angular.module('50movesApp')
  .controller('HeaderCtrl', function ($scope, Auth) {
    //$scope.username = $scope.user;
    //console.log(user);
    $scope.logout = function() { Auth.$unauth(); };


  });