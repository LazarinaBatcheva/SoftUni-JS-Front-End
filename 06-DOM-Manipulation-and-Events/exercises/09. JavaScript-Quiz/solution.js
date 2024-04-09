function solve() {
	const quizAnswerElements = document.querySelectorAll('.quiz-answer');

	const questions = {
		'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
		'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
		'Question #3: What is DOM?': 'A programming API for HTML and XML documents',
	};

	let rightAnswers = 0;
	for (const questionElement of quizAnswerElements) {
		questionElement.addEventListener('click', (e) => {
			const sectionElement = e.currentTarget.parentElement.parentElement;
			const question = sectionElement.querySelector('.question h2').textContent.trim();
			const answer = questionElement.querySelector('.answer-text').textContent.trim();

			if (questions[question] === answer) {
				rightAnswers++;
			}

			const nextSection = sectionElement.nextElementSibling;

			sectionElement.classList.add('hidden');
			sectionElement.style.display = 'none';

			nextSection.classList.remove('hidden');
			nextSection.style.display = 'block';

			if (nextSection.id === 'results') {
				const resultTextElement = nextSection.querySelector('ul#results .results-inner h1');
				
				if (rightAnswers === Object.keys(questions).length) {
					resultTextElement.textContent = 'You are recognized as top JavaScript fan!';
				} else {
					resultTextElement.textContent = `You have ${rightAnswers} right answers`;
				}
			}
		});
	}
}
