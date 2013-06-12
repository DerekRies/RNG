'use strict';

angular.module('rngApp')
  .controller('RouletteCtrl', ['$scope','$random','$timeout', function ($scope, $random, $timeout) {

    $scope.safeShotMessages = [
      'Click. Nothing'
    ];

    $scope.failShotMessages = [
      'You Died',
    ];

    $scope.animating = false;

    $scope.init = function () {
      $scope.shotsRemaining = 6;
      $scope.shotMessage = 'Go on, Fire.';
      $scope.dead = false;
    };

    $scope.pullTrigger = function () {
      // Don't make any changes until the animation in is complete
      $scope.animating = true;
      $timeout(function(){
        $scope.animating = false;
        $scope.fire();
      },300);
    };

    $scope.fire = function () {
      var outcome = $random.randInt(1, $scope.shotsRemaining);
      if(outcome === $scope.shotsRemaining) {
        $scope.die();
      }
      else {
        $scope.safe();
      }
      $scope.shotsRemaining--;
    };

    $scope.safe = function () {
      $scope.shotMessage = $scope.randomSafeMessage();
    };

    $scope.die = function () {
      $scope.shotMessage  = $scope.randomFailMessage();
      $scope.dead = true;
      // $scope.init();
    };

    $scope.randomSafeMessage = function () {
      return $random.choose($scope.safeShotMessages);
    };

    $scope.randomFailMessage = function () {
      return $random.choose($scope.failShotMessages);
    };

    $scope.init();

  }]);
