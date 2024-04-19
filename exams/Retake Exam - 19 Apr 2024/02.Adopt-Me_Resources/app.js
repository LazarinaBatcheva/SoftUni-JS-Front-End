window.addEventListener("load", solve);

function solve() {
	const formButtonElement = document.querySelector('form');
	const typeInputElement = document.getElementById('type');
    const ageInputElement = document.getElementById('age');
    const genderSelectElement = document.getElementById('gender');
    const adoptionInfoUlElement = document.getElementById('adoption-info');
    const adoptedListUlElement = document.getElementById('adopted-list');

	formButtonElement.addEventListener('submit', (e) => {
		e.preventDefault();

		const type = typeInputElement.value;
		const age = ageInputElement.value;
		const gender = genderSelectElement.value;

		if (!type || !age || !gender) {
			return;
		}

		const adoptLiElement = createNewLiElement(type, age, gender);

		adoptionInfoUlElement.appendChild(adoptLiElement);

		clearInputs();
	});

	function createNewLiElement(type, age, gender) {
		//create pet article element
		const petPElement = document.createElement('p');
		petPElement.textContent = `Pet:${type}`;

		const genderPElement = document.createElement('p');
		genderPElement.textContent = `Gender:${gender}`;

		const agePElement = document.createElement('p');
		agePElement.textContent = `Age:${age}`;

		const articleElement = document.createElement('article');
		articleElement.appendChild(petPElement);
		articleElement.appendChild(genderPElement);
		articleElement.appendChild(agePElement);

		// create buttons div element
		const editButtonElement = document.createElement('button');
		editButtonElement.className = 'edit-btn';
		editButtonElement.textContent = 'Edit';
		editButtonElement.addEventListener('click', () => editPet(liElement, type, age, gender));

		const doneButtonElement = document.createElement('button');
		doneButtonElement.className = 'done-btn';
		doneButtonElement.textContent = 'Done';
		doneButtonElement.addEventListener('click', () => finishAdoption(liElement, divButtonsElement));

		const divButtonsElement = document.createElement('div');
		divButtonsElement.className = 'buttons';
		divButtonsElement.appendChild(editButtonElement);
		divButtonsElement.appendChild(doneButtonElement);

		const liElement = document.createElement('li');
		liElement.appendChild(articleElement);
		liElement.appendChild(divButtonsElement);

		return liElement;
	}

	function editPet(liElement, type, age, gender) {
		liElement.remove();

		typeInputElement.value = type;
		ageInputElement.value = age;
		genderSelectElement.value = gender;
	}

	function finishAdoption(liElement, divButtonsElement) {
		adoptedListUlElement.appendChild(liElement);

		divButtonsElement.remove();

		const clearButtonElement = document.createElement('button');
		clearButtonElement.className = 'clear-btn';
		clearButtonElement.textContent = 'Clear';
		clearButtonElement.addEventListener('click', () => deletePet(liElement));

		liElement.appendChild(clearButtonElement);
	}

	function deletePet(liElement) {
		liElement.remove();
	}

	function clearInputs() {
		typeInputElement.value = '';
		ageInputElement.value = '';
		genderSelectElement.value = '';
	}
  }