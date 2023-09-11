let triggerEvent = require('../handler/events');
async function handleConnection(io) {
  io.on('connection', socket => {
    console.log('A user is connected!')
    socket.on('disconnect', () => {
      console.log('A user is disconnected!')
    }) 
    socket.on('event', (event) => {
        triggerEvent({ event, conn: { socket, io }, users })
    })
  })
}
module.exports = handleConnection;