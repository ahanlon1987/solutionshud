'use strict';

angular.module('mean.system').controller('WorklogController', ['$scope', '$http', 'Global',
  function($scope, $http, Global) {

      $scope.global = Global;
      $scope.myData = {};
      $scope.myData.doClick = function(item, event) {

          var responsePromise = $http.get('/worklog');

          responsePromise.success(function(data, status, headers, config) {
              $scope.myData.fromServer = data;
          });
          responsePromise.error(function(data, status, headers, config) {
              alert('AJAX failed!');
          });
      };

  }
]);
