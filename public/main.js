const socket = io('http://localhost:8000');
socket.on('messageFromServer', (data) => {
  console.log(data);
  socket.emit('messageToServer', { message: 'How are you doing!!!' });
});

document.querySelector('#message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#user-message');
  socket.emit('newMessageToServer', { text: input.value });
  input.value = '';
});

socket.on('messageToClient', (msg) => {
  document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`;
});

// socket.on('ping', () => {
//   console.log('Ping was receive from server');
// });

// socket.on('pong', (latency) => {
//   console.log(latency);
//   console.log('Pong was sent to server');
// });
