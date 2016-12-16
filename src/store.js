const constants = require('./constants.js');

function init() {
	const currentStore = localStorage.getItem(constants.keyName);
	if(currentStore === null) {
		localStorage.setItem(constants.keyName, JSON.stringify([]));
	}
}

module.exports = { init };
