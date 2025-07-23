let btn = document.querySelector('#submit_lobby_name');
let lobbyName= document.querySelector('#lobby_name').value;
let heading = document.querySelector('#heading');


let url = `ws://${window.location.host}/ws/socket-server/`; // to start handshake

const chatSocket  = new WebSocket(url); // chatSocket object

//message event to listen to the messages from the server
console.log(chatSocket.url); // 'ws://websocket.example.org'

checkConnection();

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
