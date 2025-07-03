const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('User connected');
  socket.on('message', msg => io.emit('message', msg));
});

http.listen(5000, () => console.log('Server running'));
