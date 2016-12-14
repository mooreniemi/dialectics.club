var app = require('./app.js');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

function printDom() {
  var window = document.defaultView;
  console.log(window.document.documentElement.outerHTML);
}

describe('App', function() {
  // https://www.npmjs.com/package/mocha-jsdom
  jsdom();

  before(function() {
    var div = document.createElement('div');
    div.id = 'appContainer';
    document.body.appendChild(div);
  });

  describe('loading', function() {
    it('it should load our application', function() {
      app.init();

      var content = document.getElementById('appContainer').textContent;
      expect(content).eq('welcome to my app');
    });
  });
});

