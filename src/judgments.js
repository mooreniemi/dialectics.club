const startArgument = `<div id="activeArgument" class="argument">If <input name="if" class="ifInput" placeholder="x is true">, then <input name="then" class="thenInput" placeholder="y is true">. <button id="submit" class="submitArgument">+</button></div>`;

function argTemplate(a) {
	const [i, t] = Object.values(a)[0];
	return `<div id="${Object.keys(a)}" class="argument">If ${i}, then ${t}.</div>`;
}

function load(container) {
	var arguments = JSON.parse(localStorage.getItem('arguments'));
	var serialized = arguments.map(e => {
		return argTemplate(e);
	});

	container.innerHTML += serialized;
}

function store(i, t) {
	const args = [i, t];
	const key = `${i}-${t}`;
	var o = {};
	o[key] = args;

	var storedArguments = JSON.parse(localStorage.getItem('arguments'));
	storedArguments.push(o);

	localStorage.setItem('arguments', JSON.stringify(storedArguments));
}

function add(container) {
	container.innerHTML += startArgument;
}

function redraw(container) {
	const submitArgumentButton = document.getElementById('submit');
	submitArgumentButton.addEventListener('click', function() {
		const [i, t] = document.querySelectorAll('input');
		store(i.value, t.value);
		document.getElementById('activeArgument').remove();
		load(container);
		add(container);
	});
}

module.exports = { store, add, load, initStorage, redraw };
