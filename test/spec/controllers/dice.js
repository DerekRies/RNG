'use strict';

describe('Controller: DiceCtrl', function () {

  // load the controller's module
  beforeEach(module('rngApp'));

  var DiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiceCtrl = $controller('DiceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
