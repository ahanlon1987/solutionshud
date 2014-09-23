'use strict';

angular.module('mean.system').controller('WorklogController', ['$scope', '$http', 'Global',
  function($scope, $http, Global) {

      $scope.global = Global;
      $scope.worklogData = {};
      $scope.worklogData.doClick = function(item, event) {

          var responsePromise = $http.get('/worklog');

          responsePromise.success(function(data, status, headers, config) {
              $scope.worklogData = data;
          });
          responsePromise.error(function(data, status, headers, config) {
              alert('AJAX failed!');
          });
      };

  }
]);
