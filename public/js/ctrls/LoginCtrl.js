/**
 * Created by HUQ on 10/28/15.
 */
//var LoginCtrl = () => {

//todo: this variable is accessible outside of the scope?!?!
app.controller('LoginCtrl', function($scope, $location, $http, $state) {
  console.log("loginCtrl loaded");

  $scope.login = function() {
    console.log("login button pushed!");
    //window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token";
    return false;
  };

  $scope.signup = function() {
    console.log("signup button pushed!");
    //window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token";
    return false;
  };

});
//};

//module.exports = LoginCtrl;
//