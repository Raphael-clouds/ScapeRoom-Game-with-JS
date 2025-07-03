// importing the questions from preguntas.js
import { questions } from './preguntas.js';

function randomQuestion() {
    let questionsBase = questions;
    let counter = 0;

    // Creating lives
    let maxVidas = 10;
    let vidasRestantes = maxVidas;

    // Welcome message
    alert("¡Bienvenido al juego ScapeRoom!.\nPara ganar el juego debes completar el algoritmo respondiendo las preguntas.\nSi respondes 7 veces correctamente, ganas.\nTienes 10 vidas si las pierdes todas, pierdes el juego.\n¡Buena suerte!");

    // initializing the game
    while (vidasRestantes > 0) {

        // Easy mode
        if (vidasRestantes >= 5 && vidasRestantes <= 10) {
            const easyMode = questionsBase[2];
            let seleccionAleatoria = easyMode[Math.floor(Math.random() * easyMode.length)];
            let preguntaAleatoria = seleccionAleatoria.pregunta;
            let respuestaAleatoria = seleccionAleatoria.respuesta;
            const answer = prompt(preguntaAleatoria);
            if (answer.toLowerCase() === respuestaAleatoria.toLowerCase()) {
                counter++;
                alert(`¡Respuesta correcta!\nHas acertado ${counter} preguntas.`);
            } else {
                vidasRestantes--;
                alert(`Respuesta incorrecta. Te quedan ${vidasRestantes} vidas.`);
            }
        }

        // Complex mode
        else if (vidasRestantes <= 4 && vidasRestantes > 2) {
            const complexMode = questionsBase[1];
            let seleccionAleatoria = complexMode[Math.floor(Math.random() * complexMode.length)];
            let preguntaAleatoria = seleccionAleatoria.pregunta;
            let respuestaAleatoria = seleccionAleatoria.respuesta;
            const answer = prompt(preguntaAleatoria);
            if (answer.toLowerCase() === respuestaAleatoria.toLowerCase()) {
                counter++;
                alert(`¡Respuesta correcta!\nHas acertado ${counter} preguntas.`);
            } else {
                vidasRestantes--;
                alert(`Respuesta incorrecta. Te quedan ${vidasRestantes} vidas.`);
            }
        }

        // Hardcore mode
        else if (vidasRestantes < 2 && vidasRestantes > 0) {
            const hardcoreMode = questionsBase[0];
            let seleccionAleatoria = hardcoreMode[Math.floor(Math.random() * hardcoreMode.length)];
            let preguntaAleatoria = seleccionAleatoria.pregunta;
            let respuestaAleatoria = seleccionAleatoria.respuesta;
            const answer = prompt(preguntaAleatoria);
            if (answer.toLowerCase() === respuestaAleatoria.toLowerCase()) {
                counter++;
                alert(`¡Respuesta correcta!\nHas acertado ${counter} preguntas.`);
            } else {
                vidasRestantes--;
                alert(`Respuesta incorrecta. Te quedan ${vidasRestantes} vidas.`);
            }
        }
        if(counter === 5){
            alert("¡Felicidades! Has ganado el juego ScapeRoom.");
            break;
        }
    }
}
export { randomQuestion };
