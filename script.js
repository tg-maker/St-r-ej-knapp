document.addEventListener("DOMContentLoaded", function() {
    const messageBox = document.getElementById('messageBox');
    const messageInput = document.getElementById('messageInput');
    const updateButton = document.getElementById('updateButton');

    // Ladda det sparade meddelandet från localStorage
    const savedMessage = localStorage.getItem('message');
    if (savedMessage) {
        messageBox.textContent = savedMessage;
    }

    // När knappen klickas, spara meddelandet och uppdatera skylt
    updateButton.addEventListener('click', function() {
        const newMessage = messageInput.value;
        if (newMessage.trim() !== "") {
            localStorage.setItem('message', newMessage);
            messageBox.textContent = newMessage;
            messageInput.value = ""; // Rensa inputfältet
        } else {
            alert("Skriv ett meddelande!");
        }
    });
});
