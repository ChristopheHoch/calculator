'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.total = 0;

    $scope.setOpenTrueOnCalculator = function() {
    	console.log('setOpenTrueOnCalculator');
    };

});