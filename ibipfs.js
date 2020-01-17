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

	/**
	 * Stores content universally,
	 * via `window.ibipfs` and|or `ipfs-postmsg-proxy@ServiceWorker` and|or `js-ipfs-http-client`
	 * - First and foremost, locally in browser(node) and/or daemon(node)
	 * - If available, remotely to `companion, preloader, (-- writable?)` nodes // Provisioning? [Option: Integration with Cloud Storage Providers]
	 * - On demand, distributed to anywhere, including the `FileCoin Empowered DSN(Distributed Storage Network)` // `js-filecoin-api-client`
	 * @param {Multiformats} obj
	 * @param {Object} opt // options for storage
	 * @param {IPFSDistributor} distributor ?
	 **/
	store(obj, opt) {
	  // appreciate(content, $$$)
	}

}

export default IBIPFS;