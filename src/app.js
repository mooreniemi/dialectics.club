const constants = require('./constants.js');

const i18nService = require('./i18n_service.js');
const storeService = require('./store.js');

const judgments = require('./judgments.js');
const templates = require('./templates.js');

function init() {
  const store = storeService.connect();
  const c = document.getElementById(constants.containerId);

  if(c === null) {
    console.log(i18nService.t('errors.noRoot'));
  } else {
    c.innerHTML += templates.brand;
    c.innerHTML += templates.flashMessages;

    var flashMessages = document.getElementById('flashMessages');
    flashMessages.innerHTML += templates.defaultFlash;

    window.setTimeout(function() {
      var flashes = [].slice.call(
        document.getElementsByClassName('flashMessage')
      );
      flashes.map(s => { s.remove(); });
    }, 5000);

    c.innerHTML += templates.workingArea;
    const s = document.getElementById('sheet');

    const submitArgumentButton = document.getElementById('submit');
    submitArgumentButton.addEventListener('click', function() {
      judgments.submitArgument(store, s);
    });

    judgments.redraw(store, s);
  }


  return document;
}

module.exports = { init };
