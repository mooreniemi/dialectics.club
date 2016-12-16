const constants = require('./constants.js');

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


module.exports = { init };
