// blog.js

function createOrder() {
    var form = document.getElementById("new_room");
    var formData = new FormData(form);

    fetch('/api/create_chat', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Clear the form after successful submission (optional)
        form.reset();
        // Fetch and display the updated list of posts
    })
    .catch(error => console.error('Error submitting blog post:', error));
    fetchRooms();
}

function createRoomPreview(message, id, username) {
    var postDiv = document.createElement("div");
    postDiv.classList.add("Blog");

    var infoElement = document.createElement("p");
    infoElement.innerText = message + " by " + username;

    postDiv.appendChild(infoElement);

    var messagesDiv = document.getElementById("rooms");
    messagesDiv.appendChild(postDiv);
}

function fetchRooms() {
    fetch('/api/rooms')
        .then(response => response.json())
        .then(posts => {
            updateRoomPreviews(posts);
            console.log(posts);
        })
        .catch(error => console.error('Error fetching room previews:', error));
}

fetchRooms();

function updateRoomPreviews(rooms) {
    var messagesDiv = document.getElementById("rooms");

    // Clear existing room previews
    messagesDiv.innerHTML = "";

    // Add the updated room previews
    for (var i = 0; i < rooms.length; i++) {
        var room = rooms[i];
        createRoomPreview(room.message, room.id, room.username);
    }

    // Add click event listeners to join buttons
    var joinButtons = document.querySelectorAll(".Blog button");
    joinButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            joinRoom(button.dataset.roomId);
        });
    });
}