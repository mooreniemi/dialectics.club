const constants = require('./constants.js');
const templates = require('./templates.js');

function load(container, store) {
  var judgments = store.retrieveAll(constants.judgmentsKey);
  var serialized = judgments.map(e => {
    return templates.oneArgument(e);
  });

  container.innerHTML = '';
  serialized.map(s => {
    container.innerHTML += s;
  });
}

function add(container) {
  container.innerHTML += templates.startArgument;
  return container;
}

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function save(store) {
  function addToCurrentCollection(input, keyName) {
    const cKey = `${input.value.hashCode()}`;
    var storedC = store.retrieveAll(keyName);
    var o = {};
    o[cKey] = input.value;
    storedC.push(o);
    store.persist(keyName, storedC);
    return cKey;
  };

  const [ifInput, thenInput] = document.querySelectorAll('input');
  const statement = [ifInput.value, thenInput.value];

  const ifKey = addToCurrentCollection(ifInput, constants.ifsKey);
  const thenKey = addToCurrentCollection(thenInput, constants.thensKey);

  const key = `${ifKey}${constants.keyDelimiter}${thenKey}`;
  var j = {};
  j[key] = statement;

  var storedJudgments = store.retrieveAll(constants.judgmentsKey);
  storedJudgments.push(j);
  store.persist(constants.judgmentsKey, storedJudgments);

  return store;
}

function redraw(store, container) {
  var oldArgument = document.getElementById('activeArgument');
  if(oldArgument !== null) {
    oldArgument.remove();
  }

  load(container, store);
  add(container);

  return container;
}

function submitArgument(store, container) {
  save(store);
  container = redraw(store, container);
  return container;
}

module.exports = { redraw, submitArgument };
