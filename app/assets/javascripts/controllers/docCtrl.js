/*globals angular */
angular.module('myApp').controller('docCtrl', function ($scope) {

  'use strict';

  $scope.init = function () {
    console.log("amitai");
    $scope.name = 'amitai';
  };
});
