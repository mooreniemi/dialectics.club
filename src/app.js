const containerId = 'appContainer';

const i18nService = require('./i18n_service.js');
const judgments = require('./judgments.js');
const store = require('./store.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;
const welcome = `<p id="welcome" class="welcome">${i18nService.t('begin with a judgment')}</p>`;

function init() {
	store.init();

	const c = document.getElementById(containerId);

	if(c === null) {
		console.log(i18nService.t('errors.noRoot'));
	} else {
		c.innerHTML += brand;
		c.innerHTML += welcome;

		judgments.load(c);
		judgments.add(c);
	}

  judgments.redraw(c);

	return document;
}

module.exports = { init };
