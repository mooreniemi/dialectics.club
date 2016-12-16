function init() {
	const currentStore = localStorage.getItem('arguments');
	if(currentStore === null) {
		localStorage.setItem('arguments', JSON.stringify([]));
	}
}

module.exports = { init };
