function generateReport() {
    const thElements = document.querySelectorAll('thead th');
    const trElements = document.querySelectorAll('tbody tr');
    const outputElement = document.getElementById('output');

    const tableColumns = Array.from(thElements)
		.map(thElement => ({
			name: thElement.querySelector('input[type=checkbox]').name,
			active: thElement.querySelector('input[type=checkbox]').checked,
		}));

    const reportData = Array.from(trElements)
		.map(trElement => {
			const tdElements = trElement.querySelectorAll('td');
			const rowData = {};

			tableColumns.forEach((column, i) => {
				if (column.active) {
					rowData[column.name] = tdElements[i].textContent;
				}
			});

			return rowData;
		});

	outputElement.value = JSON.stringify(reportData, null, 2);
}