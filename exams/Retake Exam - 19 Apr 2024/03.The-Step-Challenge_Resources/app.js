const baseURL = 'http://localhost:3030/jsonstore/records';

const loadRecordsButtonElement = document.getElementById('load-records');
loadRecordsButtonElement.addEventListener('click', loadRecords);

const addRecordButtonElement = document.getElementById('add-record');
addRecordButtonElement.addEventListener('click', addNewRecord);

async function loadRecords() {
    const recordsReesponse = await fetch(baseURL);
    const records = await recordsReesponse.json();

    const recordsListElement = document.getElementById('list');
    recordsListElement.innerHTML = '';

    const recordFragment = document.createDocumentFragment();

    Object.values(records)
        .forEach(record => recordFragment.appendChild(createRecordLiElement(record)));

    recordsListElement.appendChild(recordFragment);
}

function createRecordLiElement(record) {
    // create info div element
    const namePElement = document.createElement('p');
    namePElement.textContent = record.name;

    const stepsPElement = document.createElement('p');
    stepsPElement.textContent = record.steps;

    const caloriesPElement = document.createElement('p');
    caloriesPElement.textContent = record.calories;

    const infoDivElement = document.createElement('div');
    infoDivElement.classList.add('info');
    infoDivElement.appendChild(namePElement);
    infoDivElement.appendChild(stepsPElement);
    infoDivElement.appendChild(caloriesPElement);

    // create buttons div element
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', () => changeRecordInfo(recordLiElement, record));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', () => deleteRecord(recordLiElement, record));

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('btn-wrapper');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    // create record li element and attach info and buttons div elements to it
    const recordLiElement = document.createElement('li');
    recordLiElement.classList.add('record');
    recordLiElement.appendChild(infoDivElement);
    recordLiElement.appendChild(buttonsDivElement);

    return recordLiElement;
}

async function addNewRecord() {
    const nameInputElement = document.getElementById('p-name');
    const stepsInputElement = document.getElementById('steps');
    const caloriesInputElement = document.getElementById('calories');

    const name = nameInputElement.value;
    const steps = stepsInputElement.value;
    const calories = caloriesInputElement.value;

    if (!name || !steps || !calories) {
        return;
    }

    await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            steps,
            calories,
        })
    });

    clearInputs();
    loadRecords();
}

function changeRecordInfo(recordLiElement, record) {
    const nameInputElement = document.getElementById('p-name');
    const stepsInputElement = document.getElementById('steps');
    const caloriesInputElement = document.getElementById('calories');

    nameInputElement.value = record.name;
    stepsInputElement.value = record.steps;
    caloriesInputElement.value = record.calories;

    recordLiElement.remove();

    const editButtonElement = document.getElementById('edit-record');
    editButtonElement.removeAttribute('disabled');
    editButtonElement.addEventListener('click', () => editRecord(record));

    addRecordButtonElement.setAttribute('disabled', 'disabled');
}

async function editRecord(record) {
    const nameInputElement = document.getElementById('p-name');
    const stepsInputElement = document.getElementById('steps');
    const caloriesInputElement = document.getElementById('calories');

    await fetch(`${baseURL}/${record._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameInputElement.value,
            steps: stepsInputElement.value,
            calories: caloriesInputElement.value,
            _id: record._id,
        })
    });

    clearInputs();
    loadRecords();

    const editButtonElement = document.getElementById('edit-record');
    editButtonElement.setAttribute('disabled', 'disabled');

    addRecordButtonElement.removeAttribute('disabled');
}

async function deleteRecord(recordLiElement, record) {
    await fetch(`${baseURL}/${record._id}`, {
        method: 'DELETE',
    });

    recordLiElement.remove();

    loadRecords();
}

function clearInputs() {
    const nameInputElement = document.getElementById('p-name');
    const stepsInputElement = document.getElementById('steps');
    const caloriesInputElement = document.getElementById('calories');

    nameInputElement.value = '';
    stepsInputElement.value = '';
    caloriesInputElement.value = '';
}