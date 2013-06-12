'use strict';

angular.module('rngApp')
  .controller('DrawerCtrl', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

    $scope.isOpen = false;

    $timeout(function(){
      $scope.isOpen = true;
    }, 200);

    $scope.pages = [
      {'title': 'Random Numbers', 'link': '/', icon: 'question'},
      {'title': 'Coin Flip', 'link': '/coin', icon: 'circle'},
      {'title': 'Dice Roll', 'link': '/dice', icon: 'sign-blank'},
      {'title': 'Random Time', 'link': '/time', icon: 'time'},
      {'title': 'Random Sequence', 'link': '/seq', icon: 'ellipsis-horizontal'},
      {'title': 'Random Color', 'link': '/color', icon: 'picture'},
      {'title': 'Lottery Numbers', 'link': '/lotto', icon: 'ticket'},
      {'title': 'Lat/Long Points', 'link': '/latlong', icon: 'map-marker'},
      {'title': 'Shuffle / Drawing', 'link': '/shuffle', icon: 'reorder'},
      {'title': 'Russian Roulette', 'link': '/roulette', icon: 'warning-sign'},
      {'title': 'My Saved Stuff', 'link': '/saved', icon: 'folder-open'},
    ];

    $scope.isActivePage = function (page) {
      if(page){
        return $location.path() === page.link;
      }
      else{
        return false;
      }
    };

    $scope.goToPage = function (page) {
      $location.path(page.link);
      // $scope.closeDrawer();
    };

    $scope.closeDrawer = function () {
      $scope.isOpen = false;
    };

    $scope.openDrawer = function () {
      console.log('what the fuck');
      $scope.isOpen = true;
    };

  }]);
