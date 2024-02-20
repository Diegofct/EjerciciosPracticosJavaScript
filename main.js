const btnValidar = document.getElementById('btn-validar');


//Ejercicio set de tennis
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

// Ejercicio palabra mas larga
function buscarPalabraMasLarga() {
    const inputPrimerPalabra = document.getElementById('primer-palabra').value;
    const inputSegundaPalabra = document.getElementById('segunda-palabra').value;
    const spanRespuesta = document.getElementById('texto');

    const longitudPrimerPalabra = inputPrimerPalabra.length;
    const longitudSegundaPalabra = inputSegundaPalabra.length;

    let palabraMasLarga;


    if (longitudPrimerPalabra > longitudSegundaPalabra) {
        palabraMasLarga = inputPrimerPalabra;
        spanRespuesta.innerHTML = 'La palabra ' + inputPrimerPalabra + ' es mas larga que ' + inputSegundaPalabra;
    } else if (longitudPrimerPalabra < longitudSegundaPalabra) {
        palabraMasLarga = inputSegundaPalabra;
        spanRespuesta.innerHTML = 'La palabra ' + inputSegundaPalabra + ' es mas larga que ' + inputPrimerPalabra;
    } else {
        palabraMasLarga = "Ambas palabras tienen la misma longitud";
        spanRespuesta.innerHTML = palabraMasLarga;
    }
}

// Ejercicio Digito Verificador
function obtenerDigitoVerificador () {
    let rol = document.getElementById("numero-rol").value
    let spanDigitoVerificador = document.getElementById("mostrar-digito");

    let listaRol = []
    let numeroInvertido = parseInt(rol.toString().split('').reverse().join(''));
    listaRol.push(numeroInvertido)

    let resultadoMultiplicacion = multiplicarPorSecuencia(numeroInvertido);

    let moduloResultadoMultiplicacion = (resultadoMultiplicacion % 11)
    let digitoVerificador = (11 - moduloResultadoMultiplicacion)
    spanDigitoVerificador.innerHTML = digitoVerificador

    if (!isNaN(digitoVerificador)) {  
        spanDigitoVerificador.innerHTML = digitoVerificador;
    }
}

function multiplicarPorSecuencia(numero) {
    let numeroStr = numero.toString();

    let longitud = numeroStr.length;
    let secuencia = [2, 3, 4, 5, 6, 7];

    let resultado = 0;

    for (let i = 0; i < longitud; i++) {
        let digito = parseInt(numeroStr.charAt(i));
        let multiplicador = secuencia[i % secuencia.length];
        resultado += digito * multiplicador;
    }

    return resultado;
}












