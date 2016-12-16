const constants = require('./constants.js');
const i18nService = require('./i18n_service.js');
const judgments = require('./judgments.js');
const store = require('./store.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;
const welcome = `<p id="welcome" class="welcome">${i18nService.t('begin with a judgment')}</p>`;

function init() {
	store.init();

	const c = document.getElementById(constants.containerId);

	if(c === null) {
		console.log(i18nService.t('errors.noRoot'));
	} else {
		c.innerHTML += brand;
		c.innerHTML += welcome;
    window.setTimeout(function() { document.getElementById('welcome').remove(); }, 2000);
    c.innerHTML += '<div id="workingArea"><div id="sheet"></div><button id="submit" class="submitArgument">+</button></div>';
    const s = document.getElementById('sheet');

	  const submitArgumentButton = document.getElementById('submit');
	  submitArgumentButton.addEventListener('click', function() {
      judgments.submitArgument(s);
    });

    judgments.redraw(s);
	}


	return document;
}

module.exports = { init };
