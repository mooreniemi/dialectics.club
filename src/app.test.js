var app = require('./app.js');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

function printDom() {
  var window = document.defaultView;
  console.log(window.document.documentElement.outerHTML);
}

// Storage Mock
function storageMock() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

describe('app', function() {
  // https://www.npmjs.com/package/mocha-jsdom
  jsdom();

  before(function() {
    var div = document.createElement('div');
    div.id = 'appContainer';
    document.body.appendChild(div);
    // mock the localStorage
    window.localStorage = storageMock();
    // mock the sessionStorage
    window.sessionStorage = storageMock();
  });

  describe('#init', function() {
    it('it should load our application to our appContainer element', function() {
      app.init();

      var content = document.getElementById('welcome').textContent;
      expect(content).eq('begin with a judgment');
    });
  });
});
