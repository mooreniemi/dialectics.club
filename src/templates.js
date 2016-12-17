const i18nService = require('./i18n_service.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;

const flashMessages = `<div id="flashMessages"></div>`;
const defaultFlash = `<p class="flashMessage">${i18nService.t('begin with a judgment')}</p>`;

const workingArea = '<div id="workingArea"><div id="sheet"></div><button id="submit" class="submitArgument">+</button></div>';

const startArgument = `<div id="activeArgument" class="argument">If <input name="if" class="ifInput" placeholder="x (is true)" autofocus="">, then <input name="then" class="thenInput" placeholder="y (is true)">.</div>`;

function oneArgument(a) {
  //TODO: should i shim Object.values?
  var vals = Object.keys(a).map(key =>{
    return a[key];
  })[0];
  const [i, t] = vals;
  return `<div id="${Object.keys(a)}" class="argument">If ${i}, then ${t}.</div>`;
}

module.exports = { brand, flashMessages, defaultFlash, workingArea, startArgument, oneArgument };
