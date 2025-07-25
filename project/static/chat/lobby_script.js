let btn = document.querySelector('#submit_lobby_name');
let roomInput = document.querySelector('#room_name');  // reference to the input element

btn.addEventListener('click', () => {
    let roomName = roomInput.value.trim();  // now we get the value when needed
    console.log(roomName);

    if (!roomName) {
        alert("Please enter a room name!");
        return;
    }

    window.location.href = `/chat/${roomName}/`;
});

roomInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        btn.click();
    }
});
