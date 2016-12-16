const constants = require('./constants.js');

function connect() {
  var store;
  if (typeof localStorage === 'undefined') {
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
	  store = init(mock);
  } else {
	  store = init(localStorage);
  }
  return store;
}

function init(storage) {
	const currentStore = storage.getItem(constants.keyName);
	if(currentStore === null) {
		storage.setItem(constants.keyName, JSON.stringify([]));
	}

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
