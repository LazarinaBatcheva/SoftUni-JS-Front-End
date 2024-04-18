window.addEventListener("load", solve)

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    addButtonElement.addEventListener('click', addNewMember);

    function addNewMember() {
		const nameInputElement = document.getElementById('name');
		const phoneInputElement = document.getElementById('phone');
		const categoryInputElement = document.getElementById("category");
		const name = nameInputElement.value.trim();
		const phone = phoneInputElement.value.trim();
		const category = categoryInputElement.value.trim();

		if (name === '' || phone === '' || category === '') {
			return;
		}
		
		// create check article element
		const namePElement = document.createElement('p');
		namePElement.textContent = `name:${name}`;

		const phonePElement = document.createElement('p');
		phonePElement.textContent = `phone:${phone}`;

		const categoryPElement = document.createElement('p');
		categoryPElement.textContent = `category:${category}`;

		const checkArticleElement = document.createElement('article');
		checkArticleElement.appendChild(namePElement);
		checkArticleElement.appendChild(phonePElement);
		checkArticleElement.appendChild(categoryPElement);
		
		// create check div element
		const editButtonElement = document.createElement('button');
		editButtonElement.classList = ('edit-btn');
		editButtonElement.addEventListener('click', () => {
			nameInputElement.value = name;
			phoneInputElement.value = phone;
			categoryInputElement.value = category;

			checkLiElement.remove();
		});

		const saveButtonElement = document.createElement('button');
		saveButtonElement.classList = ('save-btn');
		saveButtonElement.addEventListener('click', () => {
			const contactsUlElement = document.getElementById('contact-list');
			contactsUlElement.appendChild(checkLiElement)

			checkDivElement.remove();

			const deleteButtonElement = document.createElement('button');
			deleteButtonElement.classList = ('del-btn');
			checkLiElement.appendChild(deleteButtonElement);
			
			deleteButtonElement.addEventListener('click', () => {
				checkLiElement.remove();
			});
		});

		const checkDivElement = document.createElement('div');
		checkDivElement.appendChild(editButtonElement);
		checkDivElement.appendChild(saveButtonElement);

		//create check li element
		const checkLiElement = document.createElement('li');
		checkLiElement.appendChild(checkArticleElement);
		checkLiElement.appendChild(checkDivElement);

		// attach check li element to check ul element
		const checkUlElement = document.getElementById('check-list');
		checkUlElement.appendChild(checkLiElement);


		clearInputs();
    }

	function clearInputs() {
		const nameInputElement = document.getElementById('name');
		const phoneInputElement = document.getElementById('phone');
		const categoryInputElement = document.getElementById("category");

		nameInputElement.value = '';
		phoneInputElement.value = '';
		categoryInputElement.value = '';
	}
}
  
