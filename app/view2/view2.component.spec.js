'use strict';

describe('myApp.view2 module', function() {
  var $componentController;

  beforeEach(module('myApp.view2'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  describe('view2 component', function(){

    it('should create view2 controller', inject(function() {
      var ctrl = $componentController('view2', null, null);
      expect(ctrl).toBeDefined();
    }));

  });
});
