const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const router = require('./router');
const connectSocket = require('./controllers/webSocketConn');
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
});

// Async IIFE to initialize the WebSocket
(async () => {
  try {
    await connectSocket(io);
    console.log('WebSocket has been initialized!');
  } catch (err) {
    console.error("Error while initializing WebSocket: ", err);
  }
})();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add the WebSocket instance to the request object
app.use(function (req, res, next) {
  req.webSocket = io;
  next();
});

// Router
app.use('/', router);

http.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
