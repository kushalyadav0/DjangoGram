const roomName = JSON.parse(document.getElementById('room-name').textContent);
let url = `ws://${window.location.host}/ws/socket-server/${roomName}`; // to start handshake

const chatSocket = new WebSocket(url); // chatSocket object
console.log(chatSocket);

//test connection
function checkConnection(){
    if (chatSocket.readyState === WebSocket.OPEN) {
        console.log('WebSocket is open');
    } else if (chatSocket.readyState === WebSocket.CONNECTING) {
        console.log('WebSocket is connecting');
    } else if (chatSocket.readyState === WebSocket.CLOSING) {
         console.log('WebSocket is closing');
    } else {
        console.log('WebSocket is closed');
    }
};
checkConnection();

let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // to prevent default actions on the submission
    let message = e.target.message.value; // get the input value
    chatSocket.send(JSON.stringify({
        'message': message 
    }));

    form.reset();
});

// Listen for messages from WebSocket
chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);

    if(data.type === 'chat') {
    const msgDiv = document.querySelector('#msg_div');
    
    // Create a new element for each message
    const messageElement = document.createElement('div');
    messageElement.textContent = data.message;
    msgDiv.appendChild(messageElement);
    }
};  