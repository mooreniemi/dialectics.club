const constants = require('./constants.js');
const templates = require('./templates.js');

function load(container, store) {
  var arguments = store.retrieveAll(constants.keyName);
  var serialized = arguments.map(e => {
    return templates.oneArgument(e);
  });

  container.innerHTML = '';
  serialized.map(s => {
    container.innerHTML += s;
  });
}

function add(container) {
  container.innerHTML += templates.startArgument;
}

function submitArgument(container, store) {
  save(store);
  redraw(container, store);
}

function save(store) {
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

function redraw(container, store) {
  var oldArgument = document.getElementById('activeArgument');
  if(oldArgument !== null) {
    oldArgument.remove();
  }

  load(container, store);
  add(container);
}

module.exports = { redraw, submitArgument };
