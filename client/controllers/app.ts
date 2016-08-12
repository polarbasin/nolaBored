const angular = require('angular');
const App = angular.module('App', []);
App.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    const refreshBoard = function () {
      $http.get('/events').success(function (response) {
        $scope.events = response;
      });
    };
    
    refreshBoard();
    
    $scope.moreDetails = function () {
      $http.get('/events/:id').success(function (response) {
        $scope.event.detail = response;
      });
    };

    $scope.addEvent = function() {
      $http.post('/events', $scope.events).success(function(response) {
          refreshBoard();
      });
    };
}]);

export class AppCtrl { }