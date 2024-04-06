function attachEventsListeners() {
    const timeInputElements = document.querySelectorAll('input[type=text]');
    const buttonConvertElements = document.querySelectorAll('input[type=button]');

    const convertToSeconds = (value, unit) => {
        switch (unit) {
            case 'seconds':
                return value;
            case 'minutes':
                return value * 60;
            case 'hours':
                return value * 60 * 60;
            case 'days':
                return value * 60 * 60 * 24;
        }
    }

    const convertor = {
        seconds: (seconds) => seconds,
        minutes: (seconds) => seconds / 60,
        hours: (seconds) => seconds / 60 / 60,
        days: (seconds) => seconds / 60 / 60 / 24,
    }

    Array.from(buttonConvertElements)
        .forEach(button => {
            button.addEventListener('click', (e) => {
                currentInputElement = e.currentTarget.previousElementSibling;

                Array.from(timeInputElements)
                    .forEach(element => {
                        const seconds = convertToSeconds(Number(currentInputElement.value), currentInputElement.id);
                        element.value = convertor[element.id](seconds);
                    });
            });
        });
}