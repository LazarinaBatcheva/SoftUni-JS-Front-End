function lockedProfile() {
    const profilesURL = 'http://localhost:3030/jsonstore/advanced/profiles';

    async function getProfiles() {
        const profilesResponse = await fetch(profilesURL);
        const profiles = await profilesResponse.json();
        
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = '';

        let counter = 1;

        for (const user of Object.values(profiles)) {
            const profileHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${counter}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${counter}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${counter}Username" value="${user.username}" disabled readonly />
            <div class="user${counter}HiddenFields">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${counter}Email" value="${user.email}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user${counter}Age" value="${user.age}" disabled readonly />
            </div>
            
            <button>Show more</button>
        `;

            const profileDivElement = document.createElement('div');
            profileDivElement.className = 'profile';
            profileDivElement.innerHTML = profileHTML;
            profileDivElement.querySelector('div').style.display = 'none';

            mainElement.appendChild(profileDivElement)

            const lockRadioElement = profileDivElement.querySelector('input[type=radio][value=lock]');

            const showMoreButtonElement = profileDivElement.querySelector('button');
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
            
            counter++;
        }
    }

    getProfiles();
}