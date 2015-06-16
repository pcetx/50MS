'use strict';

/**
 * @ngdoc overview
 * @name 50movesApp
 * @description
 * # 50movesApp
 *
 * Main module of the application.
 */
var app = angular.module('50movesApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.router',
    'firebase.ref',
    'angular-loading-bar',
    'firebase.auth',
    "com.2fdevs.videogular",
    "ui.bootstrap",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster"
  ]);

app.factory('Courses', ['$firebaseArray','Ref', function($firebaseArray, Ref, $scope) {

//var courses = $firebaseArray(Ref.child('courses'));

var courses = {course1, course2, course3};

//Create an array with all of courses
var course1 = {
   name: 'Getting Started',
   level: 'Beginner',
   prerequisite: '',
   description: 'Learning how the pieces move',
   courseUrl: ''
 };

 var course2 = {
   name: 'Basic Strategy',
   level: 'Beginner',
   prerequisite: 'course1',
   description: 'Learning some basic strategies',
   courseUrl: ''
 };

 var course3 = {
   name: 'More Stuff',
   level: 'Beginner',
   prerequisite: 'course1, course2',
   description: 'Learning more',
   courseUrl: ''
 };

  // Set continuous check for achievements
  // Should activate if all the criteria for it is met
  var create = function(newRoom){

  };

  // Check if the user meets the prerequisites
  // Should return true or false 
  var checkPrerequisites = function(course){

  };

  return {
    //all: all
  }
}])