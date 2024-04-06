function encodeAndDecodeMessages() {
    const sendMsgElement = document.querySelector('#main > div:nth-child(1) textarea');
    const receivedMsgElemen = document.querySelector('#main > div:nth-child(2) textarea');
    const buttonElements = document.querySelectorAll('#main > div button');
    const encodeButton = buttonElements[0];
    const decodeButton = buttonElements[1];

    encodeButton.addEventListener('click', () => {
        const sentMessage = sendMsgElement.value;
        let encodeMsg = '';
        
        for (let i = 0; i < sentMessage.length; i++) {
            let charCode = sentMessage.charCodeAt(i) + 1;
            encodeMsg += String.fromCharCode(charCode);
        }
        
        receivedMsgElemen.textContent = encodeMsg;
        sendMsgElement.value = '';
    });

    decodeButton.addEventListener('click', () => {
        const receivedMessage = receivedMsgElemen.textContent;
        let decodeMsg = '';
        
        for (let i = 0; i < receivedMessage.length; i++) {
            let charCode = receivedMessage.charCodeAt(i) - 1;
            decodeMsg += String.fromCharCode(charCode);
        }

        receivedMsgElemen.textContent = decodeMsg;
    });
}
