const baseURL = 'http://localhost:3030/jsonstore/gifts';


const loadPresentsButtonElement = document.getElementById('load-presents');
loadPresentsButtonElement.addEventListener('click', loadPresents);

const addGiftButtonElement = document.getElementById('add-present');
addGiftButtonElement.addEventListener('click', addNewGift)

async function loadPresents() {
    const giftListElement = document.getElementById('gift-list');
    giftListElement.innerHTML = '';

    const giftsResponse = await fetch(baseURL);
    const gifts = await giftsResponse.json();

    const giftFragment = document.createDocumentFragment();

    Object.values(gifts)
        .forEach(gift => giftFragment.appendChild(createGiftSockElement(gift)));

    giftListElement.appendChild(giftFragment);
}

function createGiftSockElement(gift) {    
    // create div content
    const giftPElement = document.createElement('p');
    giftPElement.textContent = gift.gift;

    const forPElement = document.createElement('p');
    forPElement.textContent = gift.for;

    const pricePElement = document.createElement('p');
    pricePElement.textContent = gift.price;

    const contentDivElement = document.createElement('div');
    contentDivElement.className = 'content';
    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElement);
    contentDivElement.appendChild(pricePElement);

    // create buttons div element
    const changeButtonElement = document.createElement('button');
    changeButtonElement.className = 'change-btn';
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', () => changeGiftInfo(giftSockDivElement, gift));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.className = 'delete-btn';
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', () => deleteGift(gift, giftSockDivElement));

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.className = 'buttons-container';
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    // create div gift-sock element and attach gift to it
    const giftSockDivElement = document.createElement('div');
    giftSockDivElement.className = 'gift-sock';
    giftSockDivElement.appendChild(contentDivElement);
    giftSockDivElement.appendChild(buttonsDivElement);

    giftSockDivElement.setAttribute('data-id', gift._id);

    return giftSockDivElement;
}

async function addNewGift() {
    const giftInputElement = document.getElementById('gift');
    const forInputElement = document.getElementById('for');
    const priceInputElement = document.getElementById('price');

    const gift = giftInputElement.value;
    const forWho = forInputElement.value;
    const price = priceInputElement.value;


    if (gift === '' || forWho === '' || price === '') {
        return;
    }

    await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            gift,
            for: forWho,
            price,
        })
    });
    
    clearInputs();
    loadPresents();
}

function changeGiftInfo(giftSockDivElement, gift) {
    const giftInputElement = document.getElementById('gift');
    const forInputElement = document.getElementById('for');
    const priceInputElement = document.getElementById('price');

    giftInputElement.value = gift.gift;
    forInputElement.value = gift.for;
    priceInputElement.value = gift.price;

    giftSockDivElement.remove();

    const addGiftButtonElement = document.getElementById('add-present');
    addGiftButtonElement.setAttribute('disabled', 'disabled');

    const editButtonElement = document.getElementById('edit-present');
    editButtonElement.removeAttribute('disabled');
    editButtonElement.addEventListener('click', () => editGift(gift))
}

async function editGift(gift) {
    const giftInputElement = document.getElementById('gift');
    const forInputElement = document.getElementById('for');
    const priceInputElement = document.getElementById('price');

    await fetch(`${baseURL}/${gift._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            gift: giftInputElement.value,
            for: forInputElement.value,
            price: priceInputElement.value,
            _id: gift._id,
        })
    });

    const editButtonElement = document.getElementById('edit-present');
    editButtonElement.setAttribute('disabled', 'disabled');

    const addGiftButtonElement = document.getElementById('add-present');
    addGiftButtonElement.removeAttribute('disabled');

    clearInputs();
    loadPresents();
}

async function deleteGift(gift, giftSockDivElement) {
    await fetch(`${baseURL}/${gift._id}`, {
        method: 'DELETE',
    });

    giftSockDivElement.remove();

    loadPresents();
}

function clearInputs() {
    const giftInputElement = document.getElementById('gift');
    const forInputElement = document.getElementById('for');
    const priceInputElement = document.getElementById('price');

    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}