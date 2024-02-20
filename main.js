const btnValidar = document.getElementById('btn-validar');

function validarResultadoTennis() {
    const inputPuntajeA = parseInt(document.getElementById('puntaje-jugador-a').value);
    const inputPuntajeB = parseInt(document.getElementById('puntaje-jugador-b').value);
    const spanTexto = document.getElementById('texto-alternativo');
    const spanPuntosJugadorA = document.getElementById('puntos-jugador-a');
    const spanPuntosJugadorB = document.getElementById('puntos-jugador-b');

    if (!(0 <= inputPuntajeA && inputPuntajeA <= 7) || !(0 <= inputPuntajeB && inputPuntajeB <= 7)) {
        spanTexto.innerHTML = 'Puntaje inválido, digite los resultados correspondientes';
    } else if (inputPuntajeA === inputPuntajeB && inputPuntajeA === 6) {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = 'Set no terminado, se define a un punto';
    } else if (inputPuntajeA === 7 && inputPuntajeB < 5) {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = "A ganó el set";
    } else if (inputPuntajeB == 7 && inputPuntajeA < 5) {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = "B ganó el set";
    } else if (inputPuntajeA == 7 && 5 <= inputPuntajeB <= 6) {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = "A ganó el set";
    } else if (inputPuntajeB == 7 && 5 <= inputPuntajeA <= 6) {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = "B ganó el set";
    } else if (inputPuntajeA == 5 && inputPuntajeB == 5) {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = "Set no terminado, se define a dos puntos";
    } else {
        spanPuntosJugadorA.innerHTML = inputPuntajeA;
        spanPuntosJugadorB.innerHTML = inputPuntajeB;
        spanTexto.innerHTML = "Set no terminado";
    }

}










