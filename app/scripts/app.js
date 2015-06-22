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

app.factory('Users', ['$firebaseArray','Ref', function($firebaseArray, Ref, $scope, user) {

  var usersRef = $firebaseArray(Ref.child('users'));

  // Provide a method for creating a new user
  $scope.addUser = function(newUser) {
    if( newUser ) {
      // check if the user already exists

      // push the user to the end of the array
      $scope.users.$add({ 
        userId:'user.userid', 
        username: '', 
        email: 'user.password.email',
        password: 'user.password',
        completedCourses: {
          course1: 'false',
          course2: 'false',
          course3: 'false'
        },
        completedModules: {
          moduleGettingStarted: 'false',
          moduleBasics: 'false',
          moduleBasicStrategy: 'false',
          moduleBasicTactics: 'false'
        }
      })
      // display any errors
      .catch(alert);
    }
  };

  /* Recipe code to check if data exists in Firebase */
  
    function go() {
      var userId = prompt('Username?', 'Guest');
      checkIfUserExists(userId);
    }

    var USERS_LOCATION = 'https://50MS.firebaseio.com/users';
     
    function userExistsCallback(userId, exists) {
      if (exists) {
        alert('user ' + userId + ' exists!');
      } else {
        alert('user ' + userId + ' does not exist!');
      }
    }
     
    // Tests to see if /users/<userId> has any data. 
    function checkIfUserExists(userId) {
      var usersRef = new Firebase(USERS_LOCATION);
      usersRef.child(userId).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        userExistsCallback(userId, exists);
      });
    }

  // Use the user existing user.ID

  // Check is user exists already
  //$scope.checkUserExists = function(email) {

  //}

  // Store courses user is taking

  // Store progress of user in each course
  // progress, completedCourse:true/false, completedModule: module, completed: eg. module 3

  // Store all modules user is completing

  // Track progress of user in each module

  return {
    //all: all
  }

}])

app.factory('Courses', ['$firebaseArray','Ref', function($firebaseArray, Ref, $scope) {

//var courses = $firebaseArray(Ref.child('courses'));

//Create an array with all of courses
var course1 = {
   id: 'course1',
   name: 'Getting Started',
   level: 'Beginner',
   prerequisite: [ ],
   description: 'Learning how the pieces move',
   courseUrl: ''
 };

 var course2 = {
   id: 'course2',
   name: 'Basic Strategy',
   level: 'Beginner',
   prerequisite: ['course1'],
   description: 'Learning some basic strategies',
   courseUrl: ''
 };

 var course3 = {
   id: 'course3',
   name: 'More Stuff',
   level: 'Beginner',
   prerequisite: [ 'course1', 'course2' ],
   description: 'Learning more',
   courseUrl: ''
 };

 var courses = [course1, course2, course3];

  // Set continuous check for achievements
  // Should activate if all the criteria for it is met


  // Check if the user meets the prerequisites
  // Should return true or false 
  var checkPrerequisites = function(course){

  };

  return {
    //all: all
  }
  
}])