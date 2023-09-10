import { io } from 'socket.io-client'

const socket = io('https://chat-b.libyzxy0.repl.co', {
  autoConnect: false
})

export default socket
