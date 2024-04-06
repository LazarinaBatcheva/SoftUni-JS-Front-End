function solve() {
	const inputElement = document.querySelector('#exercise > textarea:first-of-type');
	const outputElement = document.querySelector('#exercise > textarea:last-of-type');
	const tbodyElements = document.querySelector('table tbody');
	const buttonElements = document.querySelectorAll('button');
	const generateButton = buttonElements[0];
	const buyButton = buttonElements[1];

	generateButton.addEventListener('click', (e) => {
		const furnitures = JSON.parse(inputElement.value);

		for (const furniture of furnitures) {
			const imgElement = document.createElement('img');
			imgElement.src = furniture.img;
			const imgTdElement = document.createElement('td');
			imgTdElement.appendChild(imgElement);

			const pNameElement = document.createElement('p');
			pNameElement.textContent = furniture.name;
			const nameTdElement = document.createElement('td');
			nameTdElement.appendChild(pNameElement);

			const pPriceElement = document.createElement('p');
			pPriceElement.textContent = furniture.price;
			const priceTdElement = document.createElement('td');
			priceTdElement.appendChild(pPriceElement);

			const pDecFactorElement = document.createElement('p');
			pDecFactorElement.textContent = furniture.decFactor;
			const decFactorTdElement = document.createElement('td');
			decFactorTdElement.appendChild(pDecFactorElement);

			const markElement = document.createElement('input');
			markElement.setAttribute('type', 'checkbox');
			const markTdElement = document.createElement('td');
			markTdElement.appendChild(markElement);

			const tbodyTrElement = document.createElement('tr');
			tbodyTrElement.appendChild(imgTdElement);
			tbodyTrElement.appendChild(nameTdElement);
			tbodyTrElement.appendChild(priceTdElement);
			tbodyTrElement.appendChild(decFactorTdElement);
			tbodyTrElement.appendChild(markTdElement);

			tbodyElements.appendChild(tbodyTrElement);
		}
	});

	buyButton.addEventListener('click', (e) => {
		let furnitureNames = [];
		let furnitureTotalPrice = 0;
		let furnitureDecFactor = 0;
		let markedFurnitures = 0;

		Array.from(tbodyElements.children)
			.forEach(trElement => {
				const markedElement = trElement.querySelector('input[type=checkbox]');

				if (!markedElement.checked) {
					return;
				}

				const name = trElement.children.item(1).textContent;
				const price = Number(trElement.children.item(2).textContent);
				const decFactor = Number(trElement.children.item(3).textContent);

				furnitureNames.push(name);
				furnitureTotalPrice += price;
				furnitureDecFactor += decFactor;
				markedFurnitures++;
			});

		const averageDecFactor = furnitureDecFactor / markedFurnitures;
		outputElement.textContent += `Bought furniture: ${furnitureNames.join(', ')}\n`;
		outputElement.textContent += `Total price: ${furnitureTotalPrice.toFixed(2)}\n`;
		outputElement.textContent += `Average decoration factor: ${averageDecFactor}`;
	});
}