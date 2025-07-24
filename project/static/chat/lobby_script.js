let btn = document.querySelector('#submit_lobby_name');

btn.addEventListener('click', () => {
    let lobbyName = document.querySelector('#room_name').value.trim(); // fixed this line
    console.log(lobbyName);

    if (!lobbyName) {
        alert("Please enter a lobby name!");
        return;
    }

    window.location.href = `/chat/${lobbyName}/`;
});
