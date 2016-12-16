const constants = require('./constants.js');
const storeService = require('./store.js');
const store = storeService.init(localStorage);

const startArgument = `<div id="activeArgument" class="argument">If <input name="if" class="ifInput" placeholder="x is true">, then <input name="then" class="thenInput" placeholder="y is true">.</div>`;

function argTemplate(a) {
  const [i, t] = Object.values(a)[0];
  return `<div id="${Object.keys(a)}" class="argument">If ${i}, then ${t}.</div>`;
}

function load(container) {
  var arguments = store.retrieveAll(constants.keyName);
  var serialized = arguments.map(e => {
    return argTemplate(e);
  });

  container.innerHTML = '';
  serialized.map(s => {
    container.innerHTML += s;
  });
}

function add(container) {
  container.innerHTML += startArgument;
}

function submitArgument(container) {
  save();
  redraw(container);
}

function save() {
  const [i, t] = document.querySelectorAll('input');
  const args = [i.value, t.value];
  // TODO: how to key usefully?
  const key = `${i.value}-${t.value}`;
  var o = {};
  o[key] = args;

  var storedArguments = store.retrieveAll(constants.keyName);
  storedArguments.push(o);

  store.persist(constants.keyName, storedArguments);
}

function redraw(container) {
  var oldArgument = document.getElementById('activeArgument');
  if(oldArgument !== null) {
    oldArgument.remove();
  }

  load(container);
  add(container);
}

module.exports = { redraw, submitArgument };
