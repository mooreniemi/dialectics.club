const containerId = 'appContainer';
const i18nService = require('./i18n_service.js');
const a = require('./arguments.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;
const welcome = `<p id="welcome" class="welcome">${i18nService.t('begin with a judgment')}</p>`;
const startArgument = `<div class="startArgument">If <input name="if" class="ifInput" placeholder="x is true">, then <input name="then" class="thenInput" placeholder="y is true">. <button id="submit" class="submitArgument">+</button></div>`;

function init() {
  const c = document.getElementById(containerId);
    if(c === null) {
      console.log(i18nService.t('errors.noRoot'));
    } else {
      c.innerHTML += brand;
      c.innerHTML += welcome;
      c.innerHTML += startArgument;
    }

  const submitArgumentButton = document.getElementById('submit');
  submitArgumentButton.addEventListener('click', function() {
    const [i, t] = document.querySelectorAll('input');
    a.storeArgument(i.value, t.value);
    // TODO: c.innerHTML += startArgument;
  });

  return document;
}

module.exports = { init };
