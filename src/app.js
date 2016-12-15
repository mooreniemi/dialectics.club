var containerId = 'appContainer';
var i18nService = require('./i18n_service.js');

function init() {
  var c = document.getElementById(containerId);
    if(c === null) {
      console.log(i18nService.t('errors.noRoot'));
    } else {
      var brand = `<h1>${i18nService.t('brand.appName')}</h1>`;
      c.innerHTML += brand;
      var html = `<div id="welcome" class="welcome">${i18nService.t('welcome to my app')}</div>`;
      c.innerHTML += html;
    }
  return document;
}

module.exports = { init };
