var judgments = require('./judgments.js');
var storeService = require('./store.js');
var templates = require('./templates.js');

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

var container,
    store = storeService.connect(),
    inputIf,
    inputThen;

describe('judgments', function() {
  // https://www.npmjs.com/package/mocha-jsdom
  jsdom();

  before(function() {
    container = document.createElement('div');
    container.id = 'appContainer';
    document.body.appendChild(container);
  });

  describe('#redraw', function() {
    it('should show all current arguments', function() {
      var newContainer = judgments.redraw(container, store);
      expect(newContainer.innerHTML).eq(templates.startArgument);
    });
  });
  describe('#submitArgument', function() {
    before(function() {
      judgments.redraw(container, store);
      const [inputIf, inputThen] = document.querySelectorAll('input');

      inputIf.value = 'x';
      inputThen.value = 'y';
    });
    it('should save a judgment to our store', function() {
      var newContainer = judgments.submitArgument(container, store);
      var a = { 'x-y': [ 'x', 'y' ] };
      expect(newContainer.innerHTML).includes(templates.oneArgument(a));
    });
  });
});
