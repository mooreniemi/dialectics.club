// printDom: easy output of jsdom
function printDom() {
  var window = document.defaultView;
  console.log(window.document.documentElement.outerHTML);
}

module.exports = { printDom };
