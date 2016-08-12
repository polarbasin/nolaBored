"use strict";
var angular = require('angular');
var App = angular.module('App', []);
App.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
        var refreshBoard = function () {
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
        $scope.addEvent = function () {
            $http.post('/events', $scope.events).success(function (response) {
                refreshBoard();
            });
        };
    }]);
var AppCtrl = (function () {
    function AppCtrl() {
    }
    return AppCtrl;
}());
exports.AppCtrl = AppCtrl;
//# sourceMappingURL=app.js.map