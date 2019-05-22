/* eslint-disable flowtype/require-valid-file-annotation */
/* global serviceWorkerOption */

export default {
  register(options = {}) {
    if (navigator.serviceWorker) {
    	if (options.scriptURL) {
    		serviceWorkerOption.scriptURL = options.scriptURL
    	}
      return navigator.serviceWorker.register(serviceWorkerOption.scriptURL, options)
    }

    return false
  },
}
