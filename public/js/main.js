/**
 * Created by HUQ on 10/26/15.
 */
var app = angular.module('peepiq', ['ui.router']);
console.log("ngApp is running");

//app.constant('constants', {
//  apiUrl: 'http://localhost:3000'
//});


//app.config(function($stateProvider, $controllerProvider, $urlRouterProvider) {
//
//  $urlRouterProvider.otherwise('/');
//
//  $stateProvider
//      .state('login', {
//        url: '/',
//        templateUrl: 'views/login.html',
//        controller: 'loginCtrl'
//      })
//      //.state('calendar', {
//      //  url: '/calendar',
//      //  templateUrl: 'views/calendar.html',
//      //  controller: "calCtrl"
//      //});
//  .state('calendar' , {
//        url: '/calendar.html'
//      });
//
//  app.registerCtrl = $controllerProvider.register;
//
//});



app.controller('loginCtrl', function($scope, $location, $http, $state) {
  console.log("loginCtrl loaded");
  $scope.login = function() {
    $location.path('views/calendar.html');
  }
});





    // remember mentioned function for later use

