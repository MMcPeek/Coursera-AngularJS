(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunches = "";
  const str = "";
  const strCopy = str.split();
  $scope.lunches = strCopy;
  
  $scope.yesButton = function() {
	$scope.isSelected = true;
	$scope.formData.yesPool = true;
	}
}
