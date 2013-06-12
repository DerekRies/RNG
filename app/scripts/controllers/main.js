'use strict';

angular.module('rngApp')
  .controller('MainCtrl', function ($scope, $timeout, $random) {

    $scope.numbers = [$random.randInt($scope.min, $scope.max)];
    $scope.min = 0;
    $scope.max = 99;
    $scope.quantity = 1;


    $scope.init = function () {
      $scope.randomNumber();
    };

    $scope.animateNumber = function(){
      for(var i = 0, l = $scope.numbers.length; i < l ; i++){
        $scope.numbers[i] = $random.randInt($scope.min, $scope.max);
      }
      if($scope.animating){
        $timeout(function(){
          $scope.animateNumber();
        },60);
      }
    };

    $scope.randomNumber = function(){
      $scope.animating = true;
      $timeout(function(){
        $scope.animating = false;
      }, 300);
      $scope.animateNumber();
      // document.body.style['background'] = $random.color();
    };

    $scope.addNumber = function () {
      $scope.numbers.push($random.randInt($scope.min, $scope.max));
      $timeout(function(){
        $scope.randomNumber();
      },1000);
    };

    $scope.calcSize = function () {

    };

    $scope.init();
  });
