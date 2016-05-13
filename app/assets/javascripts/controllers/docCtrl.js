/*globals angular, alert, App */
angular.module('myApp').controller('docCtrl', function ($scope, $http) {

  'use strict';

  $scope.init = function () {
    $scope.newDoc = {};
    $scope.editedDoc = {};
    $scope.strs = [];

    $http.get('docs').then(function (res) {
      $scope.docs = res.data;
    }, function () {
      alert('Error');
    });

    this.App = {};

    App.cable = ActionCable.createConsumer();

    App.documents = App.cable.subscriptions.create('DocumentsChannel', {
      received: function (data) {
        $scope.editedDoc.body = data.document;
        $scope.$digest();
      },

      renderMessage: function (data) {
        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
      }
    });
  };

  $scope.create = function () {
    $http.post('docs', { title: $scope.newDoc.title }).then(function (res) {
      $scope.docs.push(res.data);
    }, function () {
      alert('Error');
    });
  };

  $scope.startEdit = function (doc) {
    $scope.editedDoc = doc;
  };

  $scope.edit = function () {
    $http.put('docs', { id: $scope.editedDoc.id, body: $scope.editedDoc.body });
  };
});
