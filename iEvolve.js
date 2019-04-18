const iEvolve = () => {
    const url = window.location.href
    let ipfsPath = url.substring(url.lastIndexOf('/ipfs/Qm'), url.length - 1)

    const action = 'iEvolve: showMe'    
    
    alert(action + '@' + ipfsPath)

    if (window.ibipfs) {
    	alert('IBIPFS is working for you ...')

    	window.ibipfs.swarm
    	.connect('/dns4/service.edening.net/tcp/443/wss/ipfs/QmdC5xvY5SKnCzz4b4wLhwDLzRW3tbpyMjxqM3gay9WTVF')
    	.then(() => {
    		window.ibipfs
    		.cat(ipfsPath + '/README.md')
			.then((file) => alert(action + '\n\n\n' + file.toString()), err => alert(err))
    	}, err => console.error(err))
    }
}