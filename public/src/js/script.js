// declare variables
const btn = document.querySelector('#send_btn');
const messageInput = document.querySelector('.text_send')
const chatDiv = document.querySelector('.chat_div');

// adding event listener to the send btn
btn.addEventListener('click', (e) => {
    const message = messageInput.value;

    const newMessage = document.createElement('div');
    newMessage.className = 'left'
    newMessage.innerText = message;

    if (message !== "") chatDiv.appendChild(newMessage);

    messageInput.value = "";
    chatDiv.scrollTop = chatDiv.scrollHeight;
});

// making the send btn click when enter key is pressed
document.addEventListener('keypress', (e) => {
    if (event.keyCode === 13) btn.click();
})