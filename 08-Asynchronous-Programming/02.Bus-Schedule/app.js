function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/' ;

    const infoElement = document.querySelector('#info span.info');
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    let currentStopId = 'depot';
    let nextStop = '';
    

    function depart() {
        fetch(baseUrl + currentStopId)
            .then(response => response.json())
            .then( data => {
                infoElement.textContent = `Next stop ${data.name}`;
                currentStopId = data.next;
                nextStop = data.name;
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = false;
            })
        .catch ((error) => {
            infoElement.textContent = 'Error';
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
        });
    }

    async function arrive() {
        infoElement.textContent = `Arriving at ${nextStop}`;
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
