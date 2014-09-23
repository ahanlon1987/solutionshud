'use strict';

angular.module('mean.system').controller('WorklogController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
  }
]);
