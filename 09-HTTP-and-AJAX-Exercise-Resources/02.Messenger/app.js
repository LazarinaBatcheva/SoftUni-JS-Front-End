function attachEvents() {
    const messengerURL = 'http://localhost:3030/jsonstore/messenger';

    const sendButtonElement = document.getElementById('submit');
    sendButtonElement.addEventListener('click', sendMessage);

    async function sendMessage() {
        const authorElement = document.querySelector('input[name=author]');
        const contentMsgElement = document.querySelector('input[name=content]');

        await fetch(messengerURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: authorElement.value,
                content: contentMsgElement.value,
            })
        });

        authorElement.value = '';
        contentMsgElement.value = '';
    }

    const refreshButtonElement = document.getElementById('refresh');
    refreshButtonElement.addEventListener('click', refresh);

    async function refresh() {
        const messagesResponse = await fetch(messengerURL);
        const messages = await messagesResponse.json();

        let allMessages = [];
        Object.entries(messages)
            .forEach(([_, message]) => {
                allMessages.push(`${message.author}: ${message.content}`);
            });

        const textAreaElement = document.getElementById('messages');
        textAreaElement.value = allMessages.join('\n');
    }
}

attachEvents();