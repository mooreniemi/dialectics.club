var app = require('./app.js');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

function printDom() {
  var window = document.defaultView;
  console.log(window.document.documentElement.outerHTML);
}

describe('app', function() {
  // https://www.npmjs.com/package/mocha-jsdom
  jsdom();

  before(function() {
    var div = document.createElement('div');
    div.id = 'appContainer';
    document.body.appendChild(div);
  });

  describe('#init', function() {
    it('it should load our application to our appContainer element', function() {
      app.init();

      var content = document.getElementById('welcome').textContent;
      expect(content).eq('begin with a judgment');
    });
  });
});
