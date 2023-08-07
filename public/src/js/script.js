const btn = document.querySelector('#send_btn');
const messageInput = document.querySelector('.text_send')
const chatDiv = document.querySelector('.chat_div');

btn.addEventListener('click', (e) => {
    const message = messageInput.value;

    const newMessage = document.createElement('div');
    newMessage.className = 'left'
    newMessage.innerText = message;

    if (message !== "") chatDiv.appendChild(newMessage);

    messageInput.value = "";
});

document.addEventListener('keypress', (e) => {
    if (event.keyCode === 13) btn.click();
})