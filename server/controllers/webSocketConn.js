let handleEvent = require('../handler/event.js');
async function handleConnection(io) {
  io.on('connection', (socket) => {
    console.log('A user connected!');
    socket.on('disconnect', () => {
      console.log('A user disconnected!');
    })
    socket.on('event', handleEvent)
  })
}
module.exports = handleConnection;