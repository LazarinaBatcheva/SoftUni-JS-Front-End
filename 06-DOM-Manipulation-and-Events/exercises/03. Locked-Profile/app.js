function lockedProfile() {
    const profilElements = document.querySelectorAll('div.profile');

    Array.from(profilElements)
        .forEach(profil => {
            const lockRadioElement = profil.querySelector('input[type=radio][value=lock]');
            const showMoreButtonElement = profil.querySelector('button');

            showMoreButtonElement.addEventListener('click', () => {
                if (lockRadioElement.checked) {
                    return;
                }
                
                const hiddenUserInfoElement = showMoreButtonElement.previousElementSibling;

                hiddenUserInfoElement.style.display = hiddenUserInfoElement.style.display === 'block' 
                    ? 'none' 
                    : 'block';
                showMoreButtonElement.textContent = showMoreButtonElement.textContent === 'Show more' 
                    ? 'Hide it' 
                    : 'Show more';
            });
        });
}