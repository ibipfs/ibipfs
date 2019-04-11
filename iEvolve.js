const iEvolve = () => {
    const url = window.location.href
    let ipfsPath = url.substring(url.lastIndexOf('/ipfs/Qm'), url.length - 1)

    const action = 'iEvolve: showMe'    
    
    alert(action + '@' + ipfsPath)

    const node = new window.Ipfs({
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
	  preload: {
	  	enabled: false,
	  	addresses: []
	  },
	  Bootstrap: [
	    '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
	    '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
	    '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
	    '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
	    '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
	    '/dns4/service.edening.net/tcp/443/wss/ipfs/QmdC5xvY5SKnCzz4b4wLhwDLzRW3tbpyMjxqM3gay9WTVF'
	  ],
	  Swarm: {
	    ConnMgr: {
	      LowWater: 200,
	      HighWater: 500
	    }
	  }
	})

    node.on('ready', () => {

    	alert('Connecting...')

    	node.swarm.connect('/dns4/service.edening.net/tcp/443/wss/ipfs/QmdC5xvY5SKnCzz4b4wLhwDLzRW3tbpyMjxqM3gay9WTVF', function (err) {
		  if (err) {
		    throw err
		  }
		  // if no err is present, connection is now open
		  node.cat(ipfsPath + '/README.md', (err, file) => {
			if (err) {
				throw err
			}

			alert(action + '\n\n\n' + file.toString())
		  })
		})
    })
}