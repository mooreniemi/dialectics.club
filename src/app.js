var containerId = 'appContainer';
var i18nService = require('./i18n_service.js');

function init() {
  var c = document.getElementById(containerId);
    if(c === null) {
      console.log(i18nService.t('lacked container to root in'));
    } else {
      c.innerHTML += i18nService.t('welcome to my app');
    }
  return document;
}

module.exports = { init };
