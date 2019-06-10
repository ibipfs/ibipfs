/* IBIPFS: Be All I(PFS) Can Be In Web Browser
 * - Making the power of `IPFS` more _accessible_
 * - Bridging the gap between `IPFS` and `Browser`
 * - Empowering the person with `facility`
 *
 * ibipfs.js - `browserify/simplify/upgrade` of `jsipfs` and prefers advanced vanilla JS/ES
 * ---------------------------------------------------------------------------------------------------------------------
 * - Would be the faithful `frontier` of `jsipfs`, which reasonably gonna includes the `nodejs`, `i` care my bros' only.
 * - Would like to being a bridge to the quickly drifting distributed world of the `jsipfs`. // Self-evolving?
 * - Would like to being a `plug&play` wherever possible inside the web/browser.
 * ---------------------------------------------------------------------------------------------------------------------
 * 
 * MIT */

void{} // Start with Unknown

const ESSENCE = '`browserify/upgrade` of `jsipfs` and prefers advanced vanilla JS/ES.'

const VERSION = 'v0.0.1'

const STORY = 'Vanilla JS/ES Module'

// setting
const i = 'QmRftzEbreVTdWSwbwSogVoNSbs4XEtX2TJewFJkh2dTvB'

const _i = { 
	jsipfs: {
		ipfs: {
			cid: ['Qma4RDy3KMvVQ2dTMMv49bQiUD3CufvNNuHCALkRR8BfYk'],
			dnsLink: ['jsipfs.ipfs.io', 'jsipfs.gateway.ipfs.io', 'jsipfs.edening.net'],
			ipns: ['QmPfTZQK7EUABn2RhhxLnEBzQyJCvwvmcF2GPmZ2CbSs4X']
		},
		cdn: ['https://unpkg.com/ipfs/dist/index.min.js', 'https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js'],
		git: ['https://github.com/ipfs/js-ipfs.git'],
		local: 'window.Ipfs'
	},
	options: {
	  init: true,
    start: false,
    EXPERIMENTAL: {},
		preload: {
			enabled: false,
			addresses: [
			  '/dnsaddr/service.edening.net/https',
		    '/dnsaddr/node0.preload.ipfs.io/https',
		    '/dnsaddr/node1.preload.ipfs.io/https'
		  ]
		},
	  config: {
	    Addresses: {
			  Swarm: [],
			  API: '',
			  Gateway: ''
			},
			Discovery: {
			  MDNS: {
			    Enabled: false,
			    Interval: 10
			  },
			  webRTCStar: {
			    Enabled: true
			  }
			},
			Bootstrap: [
			  '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
			  '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
			  '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
			  '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
			  '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
			  '/dns4/service.edening.net/tcp/443/wss/ipfs/QmdC5xvY5SKnCzz4b4wLhwDLzRW3tbpyMjxqM3gay9WTVF',
		    '/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic',
		    '/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6'
			]
	  }
	},
	gateway: {
		pathToTest: '/ipfs/Qmaisz6NMhDB51cCvNWa1GMS7LU1pAxdF4Ld6Ft9kZEP2a',
    hashString: 'Hello from IPFS Gateway Checker',
    gateways: [
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
  }
}

// becoming
//let ipfsNode

let _ipfs // Singleton or Not???

let loading

class IBIPFS {
	constructor(options) {
		this._options = options
	}

	static browserify() {// Figure out what really works in browser upon the `jsipfs`
		//
	}

	static evolve() {// Evolve into the latestest version of the `jsipfs`
		//
	}

	static plugnplay() {// Get the `jsipfs` ready as `ibipfs` for the context requested
		//
	}

	loadJSIPFS() {
		//
	}

	getJSIPFS() {
		if (this.Ipfs) {
		  return this.Ipfs
	  }

	  loadJSIPFS()
	  .then((result) => {
	  	this.Ipfs = result

	  	return this.Ipfs
	  }, (reason) => {
	  	throw new Error('Failed to load the JSIPFS!')
	  })
	}

	attainGateways() {
		//
	}

	optimizeSettings() {
		//
	}

}

/*	
	apriori(conditions) {
		const aprioris = [
			new Promise(optimizeOptions),
			new Promise(attainGateways),
		  new Promise(loadJSIPFS)
		]

		return Promise.all(aprioris)
	}

	loadJSIPFS(resolve, reject) {// Place for API of `Contest/Game/Match`?

		const athletes = [
			new Promise(byIPFS),
			new Promise(byGIT),
			new Promise(byCDN)
		]

	    Promise
	    .race(athletes)
	    .then((result) => {
	    	resolve('loadJSIPFS: ' + result)
	    }, (reason) => {// fallback: trying local(inline)
	    	console.log('Trying local fallback since dynamically loading JSIPFS failed: ' + reason)

        if (window.Ipfs) {
        	if (!loading) {
	        	loading = 'inline'

	        	console.log('ibipfs loaded jsipfs: ' + loading)

	          resolve(loading)
	        } else {
						console.log('local provider: loading already by: ' + loading)

						resolve(loading)
					}

					return
        }

        return reject('No local provider was found!')
	    })
	    .catch((err) => { console.log(err) })
	}

	optimizeOptions(resolve, reject) { setTimeout(resolve, 600, 'optimizeOptions: not implemented yet, ignored!') }

	attainGateways(resolve, reject) { setTimeout(resolve, 300, 'attainGateways: not implemented yet, ignored!') }

	byIPFS(resolve, reject) { 
		setTimeout(reject, 30000, 'byIPFS not implemented yet, please fallback!')
	}

	byGIT(resolve, reject) { setTimeout(reject, 30000, 'byGIT not implemented yet, please fallback!') }

	byCDN(resolve, reject) { // fatest
		let providers = _i.jsipfs.cdn

	    let racers = []

	    providers.forEach((provider) => {
	    	racers
	    	.push(new Promise((resolve, reject) => {
	    		fetch(provider)
	    		.then((response) => {
		    	    console.log('provider: ' + provider)
		    	    console.log('status: ' + response.status)

				    if(response.ok) {
				    	response
				    	.blob()
				    	.then((theBlob) => {
				    		if(!loading) {
				    			window.Ipfs = null

									loading = response.url

								  console.log('loading: ' + loading)

								  const scriptElem = document.createElement('script')

									scriptElem.src = loading

									scriptElem.onload = () => {
								    console.log('loaded: ' + loading)

										resolve(loading)
									}

									document.head.appendChild(scriptElem)
								} else {
									console.log(provider + ': loading already by: ' + loading)
								}
				    	})
				    }
	            }, reason => reject(reason))
	        }))
	    })

	    console.log('racing among cdnProviders ...')

	    Promise
	    .race(racers)
	    .then((result) => {
	    	resolve('byCDN@' + result)
	    }, (reason) => {
	    	reject('byCDNRejection: ' + reason)
	    })
	}

// being
	let finalConfirm = confirm('IBIPFS(as JSIPFS node) would like to be working for you :)')

	if(finalConfirm) {
		apriori()
		.then((conditions) => {
			console.log('IBIPFS apriori: ' + conditions)

			if(!window.Ipfs) {
				console.log('window.Ipfs not found as promised!')
			} else {
				console.log('JSIPFS loaded as the window.Ipfs, making instance ...')

				new Promise((resolve, reject) => {
					ipfsNode = new window.Ipfs(_i.options)

					ipfsNode.on('error', err => console.log('Error making ipfs instance: ' + err))

					ipfsNode.on('init', () => {
						ipfsNode
						.repo
						.version()
						.then(version => console.log('Initialized ipfs repo with version: ' + version), err => console.error(err))

						ipfsNode
						.start()
						.then((result) => {
							window.ibipfs = ipfsNode
							window.ibipfs.Ipfs = window.Ipfs
								
							console.log('window.ibipfs is functioning as JSIPFS node ...')

							window.dispatchEvent(new Event('ibipfs'))

							resolve('window.ibipfs is functioning as JSIPFS node ...')

							ipfsNode.on('start', () => {
								ipfsNode
								.id()
						    .then(identity => console.log('Started ipfs instance: ' + JSON.stringify(identity)), err => console.error(err))

						    window.ibipfs
						    .add(window.ibipfs.Ipfs.Buffer.from(ESSENCE + ' - ' + VERSION + ' - ' + STORY))
						    .then(res => {
						    	console.log('Added metadata  @ /ipfs/' + res[0].hash)
                  
                  window.ibipfs
                  .cat(res[0].hash, (err, file) => {
                  	if (err) {
                  		console.log('Error@window.ibipfs: ' + err)
                  	} else {
                  		console.log('IBIPFS: As the verification, added metadata @ /ipfs/' + res[0].hash + ' : ' + file.toString())
                  	}
                  })
					      })
					      .catch(err => console.log('Oops! Error: ' + err))
							})

							ipfsNode.on('stop', () => {
								ipfsNode
								.id()
						    .then(identity => console.log('Stopped ipfs instance: ' + JSON.stringify(identity)), err => console.error(err))
							})					
						}, reason => reject(reason))
					})	
				})
				.catch(err => console.log(err))
			}
		}, (reason) => {
			console.log('ibipfs failed: ' + reason)
		})
		.catch(err => console.log(err))
		.finally(() => console.log('ibipfs finished working'))
	} else {
		console.log('IBIPFS is cancelled.')

		window.dispatchEvent(new Event('ibipfs_cancel'))
	}*/

export default IBIPFS;