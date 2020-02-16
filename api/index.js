const express = require('express');
const AWS = require('aws-sdk');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
return { status: "success" };
});

io.on('connection', (socket) => {
  console.log('connected.');

  socket.on("offer", (data) => {
    io.emit("answer", data);
  });

  socket.on('disconnect', function () {
    console.log('disconnected.');
  });

});

http.listen(5000, () => console.log("listening at http://localhost:5000"));
