var storeService = require('./store.js');

var expect = require('chai').expect;

describe('store', function() {
  describe('#connect', function() {
    it('should expose #retrieveAll and #persist', function() {
      const store = storeService.connect();
      expect(store.retrieveAll).to.not.be.undefined;
      expect(store.persist).to.not.be.undefined;
    });
  });
});
