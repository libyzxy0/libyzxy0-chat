import { io } from 'socket.io-client'

const socket = io('https://libyzxy0-chat.libyzxy0.repl.co', {
  autoConnect: false
})

export default socket
