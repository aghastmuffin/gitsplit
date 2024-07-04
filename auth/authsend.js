const urlObj = new URL(url);
const params = new URLSearchParams(urlObj.search);

const code = params.get('code');
const installationId = params.get('installation_id');


const socket = new WebSocket('ws://localhost:8765');

// Connection opened event handler
socket.addEventListener('open', function (event) {
    console.log('WebSocket connected.');
    
    // Sending a message to the WebSocket server
    socket.send(`inst:${installationId},code:${code}`);
});

// Receive message event handler
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

// Error event handler
socket.addEventListener('error', function (event) {
    console.error('WebSocket error: ', event);
});

// Close event handler
socket.addEventListener('close', function (event) {
    console.log('WebSocket closed.');
});
