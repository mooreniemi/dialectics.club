const containerId = 'appContainer';
var i18nService = require('./i18n_service.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;
const welcome = `<p id="welcome" class="welcome">${i18nService.t('welcome to my app')}!</p>`;

function init() {
  const c = document.getElementById(containerId);
    if(c === null) {
      console.log(i18nService.t('errors.noRoot'));
    } else {
      c.innerHTML += brand;
      c.innerHTML += welcome;
    }
  return document;
}

module.exports = { init };
