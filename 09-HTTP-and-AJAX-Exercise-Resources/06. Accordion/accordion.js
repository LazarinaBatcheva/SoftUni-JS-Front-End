function solution() {
    const articleTitlesURL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsURL = 'http://localhost:3030/jsonstore/advanced/articles/details';

    const mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    async function getArticles() {
        const titlesResponse = await fetch(articleTitlesURL);
        const titles = await titlesResponse.json();

        for (const data of titles) {
            const accordionDivElement = document.createElement('div');
            accordionDivElement.className = 'accordion';
            accordionDivElement.innerHTML = `
                <div class="head">
                    <span>${data.title}</span>
                    <button class="button" id="${data._id}">More</button>
                </div>
                <div class="extra">
                    <p>Scalable Vector Graphics .....</p>
                </div>
            `;

            mainElement.appendChild(accordionDivElement);

            const buttonElement = accordionDivElement.querySelector('button');
            buttonElement.addEventListener('click', showDetails);

            async function showDetails() {
                const detailsResponse = await fetch(`${detailsURL}/${data._id}`);
                const details = await detailsResponse.json();

                const pExtraElement = accordionDivElement.querySelector('.extra p');
                pExtraElement.textContent = details.content;

                const buttonText = buttonElement.textContent;

                if (buttonText === 'More') {
                    pExtraElement.parentElement.style.display = 'block';
                    buttonElement.textContent = 'Less';
                } else {
                    pExtraElement.parentElement.style.display = 'none';
                    buttonElement.textContent = 'More';
                }
            }
       }
    }

    getArticles();
}

solution()