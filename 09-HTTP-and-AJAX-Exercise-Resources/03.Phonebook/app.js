function attachEvents() {
    const phonebookURL = 'http://localhost:3030/jsonstore/phonebook';

    const loadButtonElement = document.getElementById('btnLoad');
    loadButtonElement.addEventListener('click', loadPhonebook);

    const createButtonElement = document.getElementById('btnCreate');
    createButtonElement.addEventListener('click', createNewRedord);

    async function loadPhonebook() {
        const phonebookResponse = await fetch(phonebookURL);
        const phonebook = await phonebookResponse.json();

        const ulPhonebookElement = document.getElementById('phonebook');
        ulPhonebookElement.innerHTML = '';
        Object.values(phonebook)
            .forEach(entry => ulPhonebookElement.appendChild(createEntryElement(entry)));
    }

    function createEntryElement(entry) {
        const liElement = document.createElement('li');
        liElement.textContent = `${entry.person}: ${entry.phone}`;

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.id = entry._id;
        deleteButtonElement.addEventListener('click', () => deleteRecord(entry._id))

        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    async function deleteRecord(recordId) {
        const deleteButton = document.getElementById(recordId);
        const liElement = deleteButton.parentElement;

        await fetch(`${phonebookURL}/${recordId}`, {
            method: 'DELETE',
        });

        liElement.remove();
    }

    async function createNewRedord() {
        const personInputElement = document.getElementById('person');
        const phoneInputElement = document.getElementById('phone');

        await fetch(phonebookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                person: personInputElement.value,
                phone: phoneInputElement.value,
            })
        });

        personInputElement.value = '';
        phoneInputElement.value = '';
    }
}

attachEvents();