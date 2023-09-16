let triggerEvent = require('../handler/events');
async function handleConnection(io) {
  try {
  io.on('connection', socket => {
    console.log('A user is connected!')
    socket.on('disconnect', () => {
      console.log('A user is disconnected!')
    }) 
    socket.on('event', (event) => {
        triggerEvent({ event, conn: { socket, io }})
    })
  })
 } catch (err) {
    console.log(err)
 }
}
module.exports = handleConnection;