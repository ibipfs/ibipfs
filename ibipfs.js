/* Be All I(PFS) Can Be In Web Browser */
/**
 * --------------------------------------------------------------------------
 * IBIPFS (v0.0.3): ibipfs.js
 * MIT
 * --------------------------------------------------------------------------
 */

(() => {
	void{} // Start with Unknown

	const VERSION = 'v0.0.3'

	const STORY = 'apriori: loading the jsipfs from the fatest CDN, dynamically, fallback to local if CDN failed'

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
			local: 'ipfs.min.js'
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
				    Swarm: [
				    ],
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
		}
	}

	// becoming
	let ipfsNode

	let loading

	const aprioris = [
		new Promise(optimizeOptions),
		new Promise(attainGateways),
	    new Promise(loadJSIPFS)
	]

	function apriori(conditions) {
		return Promise.all(aprioris)
	}

	function loadJSIPFS(resolve, reject) {// Place for API of `Contest/Game/Match`?

		const athletes = [
			new Promise(byIPFS),
			new Promise(byGIT),
			new Promise(byCDN)
		]

	    Promise
	    .race(athletes)
	    .then((result) => {
	    	resolve('loadJSIPFS: ' + result)
	    }, (reason) => {
	    	//reject(reason)
	    	fetch(_i.jsipfs.local)// fallback: trying local
	    		.then((response) => {
		    	    console.log('local provider status: ' + response.status)

				    if(response.ok) {
				    	response
				    	.blob()
				    	.then((theBlob) => {
				    		if(!loading) {
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
	    })
	    .catch((err) => { console.log(err) })
	}

	function optimizeOptions(resolve, reject) { setTimeout(resolve, 600, 'optimizeOptions') }

	function attainGateways(resolve, reject) { setTimeout(resolve, 300, 'attainGateways') }

	function byIPFS(resolve, reject) { setTimeout(resolve, 30000, 'byIPFS') }

	function byGIT(resolve, reject) { setTimeout(resolve, 60000, 'byGIT') }

	function byCDN(resolve, reject) { // fatest
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
	apriori()
	.then((conditions) => {
		console.log('apriori: ' + conditions)

		if(!window.Ipfs) {
			alert('window.Ipfs not found as promised!')
		} else {
			console.log('JSIPFS loaded as the window.Ipfs, making instance ...')

			new Promise((resolve, reject) => {
				ipfsNode = new window.Ipfs(_i.options)

				ipfsNode.on('error', err => console.log('Error making ipfs instance: ' + err))

				ipfsNode.on('init', () => {
					console.log('Initialized ipfs repo: ' + ipfsNode.repo.version())

					ipfsNode
					.start()
					.then((result) => {
						ipfsNode.on('start', () => {
							console.log('Started ipfs instance: ' + ipfsNode.id())
						})

						ipfsNode.on('stop', () => {
							console.log('Stopped ipfs instance' + ipfsNode.id())
						})

						ipfsNode.on('ready', () => {
							window.ibipfs = ipfsNode
							console.log('ipfsNode ready: ' + JSON.stringify(ipfsNode._options))
							resolve('window.ibipfs is functioning as JSIPFS node :)')
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
})()