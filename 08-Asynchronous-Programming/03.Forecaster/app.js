function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    const weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    };

    const submitButtonElement = document.getElementById('submit');
    submitButtonElement.addEventListener('click', (e) => {
        const locationInputElement = document.getElementById('location');
        const forecastElement = document.getElementById('forecast');
        const currentElement = document.getElementById('current');
        const upcomingElement = document.getElementById('upcoming');

        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(locationsData => {
                for (const location of locationsData) {
                    if (location.name.toLowerCase() === locationInputElement.value.toLowerCase()) {
                        fetch(`${baseUrl}/today/${location.code}`)
                            .then(response => response.json())
                            .then(data => {
                                const symbolSpanElement = document.createElement('span');
                                symbolSpanElement.classList.add('condition');
                                symbolSpanElement.classList.add('symbol');
                                symbolSpanElement.textContent = weatherSymbols[data.forecast.condition];

                                const forecastCitySpanElement = document.createElement('span');
                                forecastCitySpanElement.classList.add('forecast-data');
                                forecastCitySpanElement.textContent = data.name;

                                const temperatureSpanElement = document.createElement('span');
                                temperatureSpanElement.classList.add('forecast-data');
                                temperatureSpanElement.textContent = `${data.forecast.low}${weatherSymbols['Degrees']}/${data.forecast.high}${weatherSymbols['Degrees']}`;

                                const conditionSpanElement = document.createElement('span');
                                conditionSpanElement.classList.add('forecast-data');
                                conditionSpanElement.textContent = data.forecast.condition;

                                const todaySpanElement = document.createElement('span');
                                todaySpanElement.classList.add('condition');
                                todaySpanElement.appendChild(forecastCitySpanElement);
                                todaySpanElement.appendChild(temperatureSpanElement);
                                todaySpanElement.appendChild(conditionSpanElement);

                                const forecastDivElement = document.createElement('div');
                                forecastDivElement.classList.add('forecasts');
                                forecastDivElement.appendChild(symbolSpanElement);
                                forecastDivElement.appendChild(todaySpanElement);

                                currentElement.appendChild(forecastDivElement);
                            })
                        
                            fetch(`${baseUrl}/upcoming/${location.code}`)
                                .then(res => res.json())
                                .then(data => {
                                    const forecastDivElement = document.createElement('div');
                                    forecastDivElement.classList.add('forecast-info');

                                    for (const day of data.forecast) {
                                        const symbolSpanElement = document.createElement('span');
                                        symbolSpanElement.classList.add('symbol');
                                        symbolSpanElement.textContent = weatherSymbols[day.condition];

                                        const temperatureSpanElement = document.createElement('span');
                                        temperatureSpanElement.classList.add('forecast-data');
                                        temperatureSpanElement.textContent = `${day.low}${weatherSymbols['Degrees']}/${day.high}${weatherSymbols['Degrees']}`;

                                        const conditionSpanElement = document.createElement('span');
                                        conditionSpanElement.classList.add('forecast-data');
                                        conditionSpanElement.textContent = day.condition;

                                        const upcomingSpanElement = document.createElement('span');
                                        upcomingSpanElement.classList.add('upcoming');
                                        upcomingSpanElement.appendChild(symbolSpanElement);
                                        upcomingSpanElement.appendChild(temperatureSpanElement);
                                        upcomingSpanElement.appendChild(conditionSpanElement);

                                        forecastDivElement.appendChild(upcomingSpanElement);
                                    }

                                    upcomingElement.appendChild(forecastDivElement)
                                })
                    }
                }
            })
        
        forecastElement.style.display = 'block';
    });
}

attachEvents();