const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000);

const io = socketio(expressServer);

io.on('connection', (socket) => {
  socket.emit('messageFromServer', { message: 'Hello I am server!!!' });
  socket.on('messageToServer', (data) => {
    console.log(data);
  });
});
