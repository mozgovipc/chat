'use strict';

describe('myApp.chat module', function() {
  var $componentController;

  beforeEach(module('myApp.chat'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  describe('chat component', function(){

    it('should create chat controller', inject(function() {
      var ctrl = $componentController('chat', null, null);
      expect(ctrl).toBeDefined();
    }));

  });
});
