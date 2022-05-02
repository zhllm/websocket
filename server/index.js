const net = require('net')
const server = net.createServer(socket => {
    console.log('socket connected')
    socket.on('close', () => console.log('socket disconnected'))
    socket.on('error', err => console.error(err.message))
    socket.on('data', data => {
        console.log(`receive: ${data}`)
        socket.write(data)
        console.log(`send: ${data}`)
    })
})
server.listen(3000);