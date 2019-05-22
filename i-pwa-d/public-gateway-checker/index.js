const pathToTest = '/ipfs/Qmaisz6NMhDB51cCvNWa1GMS7LU1pAxdF4Ld6Ft9kZEP2a'
const hashString = 'Hello from IPFS Gateway Checker'
const gateways = [
  "https://siderus.io",
  "https://ipfs.eternum.io",
  "https://hardbin.com",
  "https://gateway.pinata.cloud",
  "https://ipfs.sloppyta.co",
  "https://ipfs.greyh.at",
  "https://gateway.serph.network",
  "https://cdn.cwinfo.net",
  "https://ipfs.io"
]

/*function checkGateways (gateways) {
  const total = gateways.length
  let checked = 0
  gateways.forEach((gateway) => {
    const gatewayAndHash = gateway + pathToTest
    // opt-out from gateway redirects done by browser extension
    const testUrl = gatewayAndHash + '#x-ipfs-companion-no-redirect'
    fetch(testUrl)
      .then(res => res.text())
      .then((text) => {
        const matched = text.trim() === hashString.trim()

        console.log('Gateway working: ' + testUrl);
      }).catch((err) => {
        console.log('Gateway[' + testUrl + '] error: ' + err);
      })
  })
}*/

/*function delegate (candidates, callback) {
  const racers = candidates || gateways

  const total = racers.length
  
  let winner = 'failed'

  racers.forEach((gateway) => {
    const gatewayAndHash = gateway + pathToTest
    // opt-out from gateway redirects done by browser extension
    const testUrl = gatewayAndHash + '#x-ipfs-companion-no-redirect'
    fetch(testUrl)
      .then(res => res.text())
      .then((text) => {
        const matched = text.trim() === hashString.trim()

        console.log('Gateway working: ' + testUrl);
      }).catch((err) => {
        console.log('Gateway[' + testUrl + '] error: ' + err);
      })
  })
}*/

function getFastest (options) {
  const candidates = options || gateways

  let racers = []

  let checked = 0;

  candidates.forEach((candidate) => {
    const gatewayAndHash = candidate + pathToTest
    // opt-out from gateway redirects done by browser extension
    const testUrl = gatewayAndHash + '#x-ipfs-companion-no-redirect'

    racers
    .push(new Promise((resolve, reject) => {
      return fetch(testUrl)
        .then(res => res.text())
        .then((text) => {
          console.log('Gateway[' + testUrl + '] result: ' + text);

          const matched = text.trim() === hashString.trim()

          if (matched) {
            resolve(candidate);

            return;
          }

          if (++checked === candidates.length) {
            reject('No Candidate Available!!!');
          }
        })
        .catch((err) => {
          console.log('Gateway[' + testUrl + '] error: ' + err);

          if (++checked === candidates.length) {
            reject('No Candidate Available!!!');
          }
        })
      }))
  })

  console.log('racing among candidates ...')

  return Promise
  .race(racers)
}

module.exports = {
  getFastest: getFastest
}