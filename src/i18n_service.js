// http://i18next.com/docs/
var i18next = require('i18next');
var i18nCache = require('i18next-localstorage-cache');

module.exports = i18next.
  use(i18nCache).
  init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          "welcome to my app": "welcome to my app",
          "brand": {
            "appName": "dialectics.club"
          },
          "errors": {
            "noRoot": "lacked container to root in"
          }
        }
      }
    }
  });
