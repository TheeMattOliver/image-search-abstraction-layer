'use strict';

describe('imgurApp.version module', function() {
  beforeEach(module('imgurApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
