let App = angular.module('App', []);
App.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  var refreshBoard = function() {
    $http.get('/events').success(function(response) {
      $scope.events = response;
    });
  };

  refreshBoard();

  $scope.moreDetails = () => {
    $http.get('/events/:id').success((response) => {
      $scope.event.detail = response;
    });
  };
  
  // $scope.addEvent = function() {
  //   $http.post('/events', $scope.events).success(function(response) {
  //       refreshBoard();
  //   });
  // };

}]);