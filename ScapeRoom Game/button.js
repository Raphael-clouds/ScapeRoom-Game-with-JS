// importing the randomQuestion function
import { randomQuestion } from './main.js';

// button functionality
const startButton = document.getElementById('startGame');
startButton.addEventListener('click', () => {
    // Iniciar el juego
    randomQuestion();
});
