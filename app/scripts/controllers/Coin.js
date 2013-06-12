'use strict';

angular.module('rngApp')
  .controller('CoinCtrl', ['$scope','$random','$timeout', function ($scope,$random,$timeout) {
    $scope.coins = ['Heads', 'Tails'];
    $scope.coin = 'Heads';
    $scope.flipping = false;

    $scope.flipCoin = function () {
      $scope.flipping = true;
      $timeout(function(){
        $scope.coin = $random.choose($scope.coins);
        $scope.flipping = false;
      },500);
    };

  }]);
