const roomName = JSON.parse(document.getElementById('room-name').textContent);

let protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
let url = `${protocol}://${window.location.host}/ws/socket-server/${roomName}/`; // to start handshake

const chatSocket = new WebSocket(url); // chatSocket object
console.log(chatSocket);

//To test websocket connection
function checkWebsocketConnection(){
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
checkWebsocketConnection();


chatSocket.onopen = function() {
    console.log("✅ WebSocket connected");
};


let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // to prevent default actions on the submission
    let message = e.target.message.value; // get the input value
    
    //if the user sends an empty message
    if (!message.trim()) return;

    chatSocket.send(JSON.stringify({
        'message': message 
    }));

    form.reset();
});

// Listen for messages from WebSocket
chatSocket.onmessage = function(e) {
    try {    
        const data = JSON.parse(e.data);
        checkWebsocketConnection();

        //to check weather data is coming in frontend or not
        console.log('Recived data before type check:', data);
        checkWebsocketConnection();

        if(data.type === 'chat_message') {
        const msgDiv = document.querySelector('#msg_div');
        
        // Create a new element for each message
        const messageElement = document.createElement('div');
        
        messageElement.textContent = data.message;
        msgDiv.appendChild(messageElement);

        // comparing current user with sender
        const currentUser = document.getElementById('current-username').textContent;
        if (data.sender === currentUser) {
            messageElement.classList.add('bubble', 'me');
        } else {
            messageElement.classList.add('bubble', 'other');
        }

        // scroll down for every new message
        scrollToBottom()
        }
    } catch (err){
        console.error("❌ Error parsing message:", err, e.data);
    }
};  


function scrollToBottom() {
    const msgDiv = document.getElementById('msg_div');
    msgDiv.scrollTop = msgDiv.scrollHeight;
}

chatSocket.onerror = function(e) {
    console.error('WebSocket error:', e);
    alert("WebSocket connection failed.");
};

chatSocket.onclose = function(e) {
    console.warn('WebSocket closed:', e);
    alert("WebSocket closed unexpectedly.");
};
