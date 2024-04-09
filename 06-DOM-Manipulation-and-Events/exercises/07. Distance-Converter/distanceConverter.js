function attachEventsListeners() {
    const convertButtonElement = document.getElementById('convert');
    const inputDistanceElement = document.getElementById('inputDistance');
    const outputDistanceElement = document.getElementById('outputDistance');

    const convertToMeters = {
        km: (number) => number * 1000,
        m: (number) => number,
        cm: (number) => number * 0.01,
        mm: (number) => number * 0.001,
        mi: (number) => number * 1609.34,
        yrd: (number) => number * 0.9144,
        ft: (number) => number * 0.3048,
        in: (number) => number * 0.0254,
    }

    const convertors = {
        km: (number) => number / 1000,
        m: (number) => number,
        cm: (number) => number / 0.01,
        mm: (number) => number / 0.001,
        mi: (number) => number / 1609.34,
        yrd: (number) => number / 0.9144,
        ft: (number) => number / 0.3048,
        in: (number) => number / 0.0254,
    };

    convertButtonElement.addEventListener('click', () => {
        const numberToConvert = Number(inputDistanceElement.value);

        const inputUnitElement = document.getElementById('inputUnits');
        const inputUnitValue = inputUnitElement.value;

        const outputUnitElement = document.getElementById('outputUnits');
        const outputUnitValue = outputUnitElement.value;

        const numberToMetetrs = convertToMeters[inputUnitValue](numberToConvert);
        const result = convertors[outputUnitValue](numberToMetetrs);

        outputDistanceElement.value = result;
    });
}