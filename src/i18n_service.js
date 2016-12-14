// http://i18next.com/docs/
var i18next = require('i18next');

module.exports = i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "welcome to my app": "welcome to my app",
        "errors": {
          "no root": "lacked container to root in"
        }
      }
    }
  }
});
