function solve() {
	const inputElement = document.getElementById('input');
	const text = inputElement.value;
	const outputElement = document.getElementById('output');

	const result = text.split('.')
					.filter(sentence => sentence)
					.reduce((result, sentence, index) => {
						const resultIndex = Math.floor(index / 3);
						if (!result[resultIndex]) {
						result[resultIndex] = [];
						}

						result[resultIndex].push(sentence.trim());

						return result;
					}, [])
					.map(sentences => `<p>${sentences.join('. ')}.</p>`);

	outputElement.innerHTML = result;
}