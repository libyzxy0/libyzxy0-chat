const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const router = require('./router/route');
const connectDB = require('./database/connect');
const db = require('./database/db');
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
    await connectDB(process.env.MONGODB_CONNECTION_URI);
    console.log('WebSocket and Database has been initialized!');
/*
    db.createUser({
      username: 'testuser1', 
      userID: Math.floor(100000000000000 + Math.random() * 900000000000000).toString(), 
      firstName: 'Test', 
      lastName: 'User One', 
      email: 'test@gmail.com', 
      password: 'libyzxy0123', 
      accountConfirmed: true, 
      status: 'offline', 
      bio: ''
    }).then(r => console.log(r))
    */
    
  } catch (err) {
    console.error("Error while initializing Database, and WebSocket:", err);
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
