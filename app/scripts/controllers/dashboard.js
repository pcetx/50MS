'use strict';

/**
 * @ngdoc function
 * @name 50movesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 50movesApp
 */
angular.module('50movesApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });