const net = require('net')
const client = net.connect(8888, '192.168.10.105')

client.on('connect', () => console.log('connected.'))
client.on('data', data => console.log(`receive: ${data}`))
client.on('end', () => console.log('disconnected.'))
client.on('error', err => console.error(err.message))

setInterval(() => {
    const msg = 'hello'
    console.log(`send: ${msg}`)
    client.write(msg)
}, 3000);