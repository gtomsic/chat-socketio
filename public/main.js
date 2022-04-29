const socket = io('http://localhost:8000');
socket.on('messageFromServer', (data) => {
  console.log(data);
  socket.emit('messageToServer', { message: 'How are you doing!!!' });
});
