function validate() {
    const inputEmailElement = document.getElementById('email');
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    inputEmailElement.addEventListener('change', (e) => {
        if (!emailPattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}