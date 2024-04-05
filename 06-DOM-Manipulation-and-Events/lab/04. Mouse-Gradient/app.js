function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElemen = document.getElementById('result');

    gradientElement.addEventListener('mousemove', function(event) {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const percentage = Math.floor((currentWidth / elementWidth) * 100);

        resultElemen.textContent = `${percentage}%`;
    });
}