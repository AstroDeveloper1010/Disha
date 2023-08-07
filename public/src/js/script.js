const btn = document.querySelector('#send_btn');
const messageInput = document.querySelector('.text_send')
const chatDiv = document.querySelector('.chat_div');

btn.addEventListener('click', (e) => {
    let isTrue = true;
    const message = messageInput.value;

    const newMessage = document.createElement('div');
    if (isTrue) {
        newMessage.className = 'left'
        isTrue = false
    }
    else {
        newMessage.className = 'right'
        isTrue = true
    }
    newMessage.innerText = message;

    chatDiv.appendChild(newMessage);

    messageInput.value = "";
});

document.addEventListener('keypress', (e) => {
    if (event.keyCode === 13) btn.click();
})