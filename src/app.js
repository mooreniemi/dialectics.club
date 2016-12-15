const containerId = 'appContainer';
var i18nService = require('./i18n_service.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;
const welcome = `<p id="welcome" class="welcome">${i18nService.t('begin with a judgment')}</p>`;
const startArgument = `<div class="startArgument">If <input name="if" class="ifInput">, then <input name="then" class="thenInput">.</div>`;

function init() {
  const c = document.getElementById(containerId);
    if(c === null) {
      console.log(i18nService.t('errors.noRoot'));
    } else {
      c.innerHTML += brand;
      c.innerHTML += welcome;
      c.innerHTML += startArgument;
    }
  return document;
}

module.exports = { init };
