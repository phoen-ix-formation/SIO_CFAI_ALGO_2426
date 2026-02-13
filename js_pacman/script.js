const elGameDiv = document.getElementById('game');

document.addEventListener('DOMContentLoaded', () => {

    // Ajout de div dans la grille HTML pour faire apparaitre les cases
    for(i = 0; i < 31; i++) {
        for(j = 0; j < 28; j++) {

            elGameDiv.appendChild(document.createElement('div'));
        }
    }
});