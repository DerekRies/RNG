'use strict';

describe('Service: random', function () {

  // load the service's module
  beforeEach(module('rngApp'));

  // instantiate service
  var random;
  beforeEach(inject(function(_random_) {
    random = _random_;
  }));

  it('should do something', function () {
    expect(!!random).toBe(true);
  });

});
