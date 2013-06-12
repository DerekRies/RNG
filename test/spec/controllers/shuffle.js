'use strict';

describe('Controller: ShuffleCtrl', function () {

  // load the controller's module
  beforeEach(module('rngApp'));

  var ShuffleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShuffleCtrl = $controller('ShuffleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
