'use strict';

describe('Controller: RouletteCtrl', function () {

  // load the controller's module
  beforeEach(module('rngApp'));

  var RouletteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RouletteCtrl = $controller('RouletteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
