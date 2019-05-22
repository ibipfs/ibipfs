"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable flowtype/require-valid-file-annotation */
/* global serviceWorkerOption */

exports.default = {
  register: function register(options = {}) {
    if (navigator.serviceWorker) {
    	if (options.scriptURL) {
    		serviceWorkerOption.scriptURL = options.scriptURL
    	}
      return navigator.serviceWorker.register(serviceWorkerOption.scriptURL, options)
    }

    return false
  }
};
module.exports = exports["default"];