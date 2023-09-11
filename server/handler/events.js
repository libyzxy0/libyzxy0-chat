let db = require('../database/db');
let { verifyToken } = require('./JWT');
module.exports = async ({ event, conn }) => {
  try {
  let messages = await db.readMessages();
  if(event.type == "message") {
    /*Input datas______
    {
      type: 'message'
      sender: {
         token: ''
      }, 
      recipient: {
         username, 
         userID
      }, 
      body: String or Object
      body.obj => {
         attachments: [
            {
               type: 'image', 
               url: 'https://example.com/picture.png'
            }
         ]
      }
    }
    ________*/
    let messageData = {
      type: 'message', 
      messageID: '$mid.' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5), 
      sender: {
        username: verifyToken(event.sender.token).username ? verifyToken(event.sender.token).username: null,
        userID: verifyToken(event.sender.token).userID ? verifyToken(event.sender.token).userID : null 
      },
      recipient: {
        username: event.recipient.username, 
        userID: event.recipient.userID
      }, 
      body: typeof(event.body) == 'object' ? event.body.body : event.body, 
      status: 'sent', 
      timestamp: Date.now(), 
      attachments: typeof(event.body) == 'object' ? event.body.attachments : []
    }
    db.createMessage(messageData)
    conn.io.emit('receive-event', messageData)
  }
   } catch (err) {
    conn.socket.emit('server-err', err.message)
   }
}