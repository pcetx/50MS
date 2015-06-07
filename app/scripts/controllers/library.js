'use strict';

/**
 * @ngdoc function
 * @name 50movesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 50movesApp
 */
angular.module('50movesApp')
  .controller('LibraryCtrl', function ($scope, user, Auth, Ref, $firebaseObject, $timeout) {

    //$scope.view = 'list.html';
    $scope.data = [{
      text: '1'
    }, {
      text: '2'
    }, {
      text: '3'
    }, {
      text: '4'
    }, {
      text: '5'
    }, {
      text: '6'
    }];

  });