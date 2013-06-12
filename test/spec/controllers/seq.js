'use strict';

describe('Controller: SeqCtrl', function () {

  // load the controller's module
  beforeEach(module('rngApp'));

  var SeqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeqCtrl = $controller('SeqCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
