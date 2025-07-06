// importing the questions from preguntas.js
import { questions } from './preguntas.js';

function randomQuestion() {
    let questionsBase = questions;
    let counter = 0;

    // Creating lives
    let maxVidas = 5;
    let vidasRestantes = maxVidas;

    // Welcome message
    alert("¡Bienvenido al juego ScapeRoom!.\nPara ganar el juego debes completar el algoritmo respondiendo las preguntas.\nSi respondes 5 veces correctamente, ganas.\nTienes 5 vidas si las pierdes todas, pierdes el juego.\n¡Buena suerte!");

    // initializing the game
    while (vidasRestantes > 0) {
        let seleccionAleatoria = questionsBase[Math.floor(Math.random() * questionsBase.length)];
        let preguntaAleatoria = seleccionAleatoria.pregunta;
        let respuestaAleatoria = seleccionAleatoria.respuesta;
        const answer = prompt(preguntaAleatoria);
        if (answer.toLocaleLowerCase() === "") {
            alert("Juego cancelado. ¡Hasta luego!");
            break;
        }
        if (answer.toLowerCase() === respuestaAleatoria.toLowerCase()) {
            counter++;
            if (counter === 1){
                    alert(`¡Respuesta correcta!\nHas acertado ${counter} pregunta.`);
                } else {
                    alert(`¡Respuesta correcta!\nHas acertado ${counter} preguntas.`);
                }
        } else {
            vidasRestantes--;
            alert(`La respuesta CORRECTA es ${respuestaAleatoria}.\nTe quedan ${vidasRestantes} vidas.`);
        }
        if (vidasRestantes === 0) {
            alert("Has perdido el juego ScapeRoom. ¡Inténtalo de nuevo!");
            break;
        }
        if(counter === 5){
            alert("¡Felicidades! Has ganado el juego ScapeRoom.");
            break;
        }
    }
}
export { randomQuestion };
