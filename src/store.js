const constants = require('./constants.js');

const mock = function() {
  var storage = {};
  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
  };
}();

function connect() {
  var store;
  if (typeof localStorage === 'undefined') {
	  store = init(mock);
  } else {
	  store = init(localStorage);
  }
  return store;
}

function init(storage) {
  constants.storageKeys.map(k => {
	  if(storage.getItem(k) === null) {
		  storage.setItem(k, JSON.stringify([]));
	  }
  });

  return {
    retrieveAll(key) {
      return JSON.parse(storage.getItem(key));
    },
    persist(key, values) {
      return storage.setItem(key, JSON.stringify(values));
    }
  };
}


module.exports = { connect };
