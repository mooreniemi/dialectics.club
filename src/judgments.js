const constants = require('./constants.js');

const startArgument = `<div id="activeArgument" class="argument">If <input name="if" class="ifInput" placeholder="x is true">, then <input name="then" class="thenInput" placeholder="y is true">.</div>`;

function argTemplate(a) {
  const [i, t] = Object.values(a)[0];
  return `<div id="${Object.keys(a)}" class="argument">If ${i}, then ${t}.</div>`;
}

function load(container) {
  var arguments = JSON.parse(localStorage.getItem(constants.keyName));
  var serialized = arguments.map(e => {
    return argTemplate(e);
  });

  container.innerHTML = '';
  serialized.map(s => {
    container.innerHTML += s;
  });
}

function store(i, t) {
  const args = [i, t];
  const key = `${i}-${t}`;
  var o = {};
  o[key] = args;

  var storedArguments = JSON.parse(localStorage.getItem(constants.keyName));
  storedArguments.push(o);

  localStorage.setItem(constants.keyName, JSON.stringify(storedArguments));
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
  store(i.value, t.value);
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
