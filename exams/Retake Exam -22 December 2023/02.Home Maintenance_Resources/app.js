window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const taskUlElement = document.getElementById('task-list');

    addButtonElement.addEventListener('click', () => taskUlElement.appendChild(createTask()));

    function createTask() {
        const [place, action, person] = getInputElements();

        if (place === '' || action === '' || person === '') {
            return;
        }

        // create task article
        const placePElement = document.createElement('p');
        placePElement.textContent = `Place:${place}`;

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action:${action}`;

        const personPElement = document.createElement('p');
        personPElement.textContent = `Person:${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        // create task buttons
        const editButtonElement = document.createElement('button');
        editButtonElement.className = 'edit';
        editButtonElement.textContent = 'Edit';
        editButtonElement.addEventListener('click', () => editTask(place, action, person));

        const doneButtonElement = document.createElement('button');
        doneButtonElement.className = 'done';
        doneButtonElement.textContent = 'Done';
        doneButtonElement.addEventListener('click', () => completingTask(taskLiElement,taskLiElement, divTaskButtonsElement))

        const divTaskButtonsElement = document.createElement('div');
        divTaskButtonsElement.appendChild(editButtonElement);
        divTaskButtonsElement.appendChild(doneButtonElement);

        // create a task li element and attached article and buttons to it
        const taskLiElement = document.createElement('li');
        taskLiElement.className = 'clean-task';
        taskLiElement.appendChild(articleElement);
        taskLiElement.appendChild(divTaskButtonsElement);

        return taskLiElement;
    }

    function editTask(place, action, person) {
        // clearing the ul element
        taskUlElement.innerHTML = '';

        // add data in input fields
        const placeInputElement = document.getElementById('place');
        const actionInputElement = document.getElementById('action');
        const personInputElement = document.getElementById('person');

        placeInputElement.value = place;
        actionInputElement.value = action;
        personInputElement.value = person;
    }

    getInputElements();
    cleanInputs();

    function completingTask(taskLiElement, taskLiElement, divTaskButtonsElement) {
        // move a task element to the done list
        const doneUlElement = document.getElementById('done-list');
        doneUlElement.appendChild(taskLiElement);

        // deleting edit and done buttons from the list
        divTaskButtonsElement.remove();

        // add delete button to the list
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.className = 'delete';
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', () => deletingTask(taskLiElement))

        taskLiElement.appendChild(deleteButtonElement);
    }

    function deletingTask(taskLiElement) {
        taskLiElement.remove();
    }

    function getInputElements () {
        const placeInputElement = document.getElementById('place');
        const actionInputElement = document.getElementById('action');
        const personInputElement = document.getElementById('person');

        place = placeInputElement.value;
        action = actionInputElement.value;
        person = personInputElement.value;

        cleanInputs();

        return [place, action, person];
    }

    function cleanInputs() {
        const placeInputElement = document.getElementById('place');
        const actionInputElement = document.getElementById('action');
        const personInputElement = document.getElementById('person');

        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }
}