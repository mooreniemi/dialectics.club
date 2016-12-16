const i18nService = require('./i18n_service.js');

const brand = `<h1 class="brandName">${i18nService.t('brand.appName')}</h1>`;
const welcome = `<p id="welcome" class="welcome">${i18nService.t('begin with a judgment')}</p>`;
const workingArea = '<div id="workingArea"><div id="sheet"></div><button id="submit" class="submitArgument">+</button></div>';

const startArgument = `<div id="activeArgument" class="argument">If <input name="if" class="ifInput" placeholder="x is true">, then <input name="then" class="thenInput" placeholder="y is true">.</div>`;

function oneArgument(a) {
  const [i, t] = Object.values(a)[0];
  return `<div id="${Object.keys(a)}" class="argument">If ${i}, then ${t}.</div>`;
}

module.exports = { brand, welcome, workingArea, startArgument, oneArgument };
