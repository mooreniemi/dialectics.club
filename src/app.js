var containerId = 'appContainer';

function init() {
  var c = document.getElementById(containerId);
    if(c === null) {
      console.log('lacked container to root in')
    } else {
      c.innerHTML += 'welcome to my app';
    }
  return document;
}

module.exports = { init };
