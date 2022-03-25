
/* eslint-disable node/no-path-concat */
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log('a user connected');
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('user disconnected');
  });
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    // eslint-disable-next-line no-console
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on *:3000');
});
