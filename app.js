(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunches = "";
  $scope.message = "";
  
  $scope.yesButton = function() {
	$scope.isSelected = true;
	
	if($scope.lunches !== "" && $scope.lunches !== null && $scope.lunches !== undefined) {
		function splitString(stringToSplit, separator) {
			const arrayOfStrings = stringToSplit.split(separator);
			var strLength = arrayOfStrings.length;
	
			if (strLength < 4) {
				$scope.message = "Enjoy!"
			};
			if (strLength > 3) {
				$scope.message = "Too much!"
			};
		};
  
	const comma = ",";
	splitString($scope.lunches, comma);
	
	} else {
	  $scope.message = "Please enter data first";
	};
  };
});
}) ();

