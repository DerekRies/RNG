'use strict';

angular.module('rngApp', [])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false).hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/coin', {
        templateUrl: 'views/coin.html',
        controller: 'CoinCtrl'
      })
      .when('/dice', {
        templateUrl: 'views/dice.html',
        controller: 'DiceCtrl'
      })
      .when('/seq', {
        templateUrl: 'views/seq.html',
        controller: 'SeqCtrl'
      })
      .when('/shuffle', {
        templateUrl: 'views/shuffle.html',
        controller: 'ShuffleCtrl'
      })
      .when('/roulette', {
        templateUrl: 'views/roulette.html',
        controller: 'RouletteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
