const baseURL = 'http://localhost:3030/jsonstore/games';

const nameElement = document.getElementById('g-name');
const typeElement = document.getElementById('type');
const maxPlayersElement = document.getElementById('players');

const loadGamesButtonElement = document.getElementById('load-games');
loadGamesButtonElement.addEventListener('click', loadGames);

const addGameButtonElement = document.getElementById('add-game');
addGameButtonElement.addEventListener('click', addNewGame)

async function loadGames() {
    const gamesResponse = await fetch(baseURL);
    const games = await gamesResponse.json();

    const gameListElement = document.getElementById('games-list');
    gameListElement.innerHTML = '';

    Object.values(games)
        .forEach(game => gameListElement.appendChild(createGameElements(game)))
}

function createGameElements(game) {
    // create content div element
    const namePElement = document.createElement('p');
    namePElement.textContent = game.name;

    const playersPElement = document.createElement('p');
    playersPElement.textContent = game.players;

    const typePElement = document.createElement('p');
    typePElement.textContent = game.type;

    const contentDivElement = document.createElement('div');
    contentDivElement.className = 'content';
    contentDivElement.appendChild(namePElement);
    contentDivElement.appendChild(playersPElement);
    contentDivElement.appendChild(typePElement);

    // create buttons div element
    const changeButtonElement = document.createElement('button');
    changeButtonElement.className = 'change-btn';
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', () => {
        nameElement.value = game.name;
        typeElement.value = game.type;
        maxPlayersElement.value = game.players;

        boardGameDivElement.remove();

        const editButtonElement = document.getElementById('edit-game');
        editButtonElement.addEventListener('click', async () => {

            addButtonElement.disabled = true;

            await fetch(`${baseURL}/${game._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: nameElement.value,
                    type: typeElement.value,
                    players: maxPlayersElement.value,
                    _id: game._id,
                })
            });

            await loadGames();
            clearInputs()
        });

        const addButtonElement = document.getElementById('add-game');

        editButtonElement.disabled = false;
        addButtonElement.disabled = true;

    });

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.className = 'delete-btn';
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', async () => {
        await fetch(`${baseURL}/${game._id}`, {
            method: 'DELETE',
        });

        boardGameDivElement.remove();
    });

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    // create board game div element
    const boardGameDivElement = document.createElement('div');
    boardGameDivElement.className = 'board-game';

    // attach game to the board game element
    boardGameDivElement.appendChild(contentDivElement);
    boardGameDivElement.appendChild(buttonsDivElement);

    return boardGameDivElement;
}

async function addNewGame() {
    const nameElement = document.getElementById('g-name');
    const typeElement = document.getElementById('type');
    const maxPlayersElement = document.getElementById('players');

    const name = nameElement.value;
    const type = typeElement.value;
    const players = maxPlayersElement.value;

    if (name === '' || type === '' || players === '') {
        return;
    }

    await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            type,
            players,
        })
    });

    await loadGames();
    clearInputs();
}

function clearInputs() {
    nameElement.value = '';
    maxPlayersElement.value = '';
    typeElement.value = '';
}