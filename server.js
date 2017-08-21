var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var cors = require('cors');

// socket
io.on('connection', function (client) {
  console.log('client added:', client.id);
  client.on('sendChatMessage', function (data) {
    io.emit("receiveChatMessage", data);
  });
  client.on('disconnect', function () {
    console.log('client removed:', client.id);
  });
});
server.listen(3000);

console.log('Server Started!')