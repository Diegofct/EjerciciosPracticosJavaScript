// const btnValidar = document.getElementById('btn-validar');

const cargarElementosHtml=()=> {
    const seccionTennis = document.getElementById('seccion-juego-tennis')
    seccionTennis.innerHTML = `
        <div class="contenedor-principal">
            <div class="arriba-contenedor-principal">
                <h1>Set de Tennis</h1>
            </div>
            <div class="under-container">
                <button id="btn-anterior-tennis" class="botones" onClick="mostrarEjercicioAnterior()">Ejercicio Anterior</button>
                <div class="content-container">
                    <div class="arriba-content-container">
                        <input id="puntaje-jugador-a" type="text" placeholder="Juegos ganados por jugador A:">
                        <input id="puntaje-jugador-b" type="text" placeholder="Juegos ganados por jugador B:">
                        <button onclick="validarResultadoTennis()" id="btn-validar">Validar</button>
                    </div>
                    <div class="abajo-content-container">
                        <p>Juegos de A: <span id="puntos-jugador-a"></span></p>
                        <p>Juegos de B: <span id="puntos-jugador-b"></span></p>
                        <span id="texto-alternativo"></span>
                    </div>
                </div>
                <button id="btn-siguiente" class="botones" onClick="mostrarSiguienteEjercicio()">Siguiente Ejercicio</button>
            </div>
        </div>
    `
    const seccionPalabraLarga = document.getElementById('palabra-mas-larga')
    seccionPalabraLarga.innerHTML = `
    
        <div class="contenedor-principal">
            <div class="arriba-contenedor-principal">
                <h1>Palabra mas larga</h1>
            </div>
            <div class="under-container">
                <button id="btn-anterior" class="botones" onClick="mostrarEjercicioAnterior()">Ejercicio Anterior</button>
                <div class="content-container">
                    <div class="arriba-content-container">
                        <input id="primer-palabra" type="text" placeholder="Escriba cualquier palabra">
                        <input id="segunda-palabra" type="text" placeholder="Escriba otra palabra">
                        <button onclick="buscarPalabraMasLarga()" id="btn-validar">Palabra mas larga</button>
                    </div>
                    <div class="abajo-content-container">
                        <span id="texto"></span>
                    </div>
                </div>
                <button id="btn-siguiente" class="botones" onClick="mostrarSiguienteEjercicio()">Siguiente Ejercicio</button>
            </div>
        </div>
    `
    const seccionDigitioVerificador = document.getElementById('digito-verificador')
    seccionDigitioVerificador.innerHTML = `
        <div class="contenedor-principal">
            <div class="arriba-contenedor-principal">
                <h1>Digito Verificador</h1>
            </div>
            <div class="under-container">
                <button id="btn-anterior" class="botones" onClick="mostrarEjercicioAnterior()">Ejercicio Anterior</button>
                <div class="content-container">
                    <div class="arriba-content-container">
                        <input id="numero-rol" type="text" placeholder="Escriba el número rol para buscar el dígito verificador">
                        <button onclick="obtenerDigitoVerificador()" id="btn-validar">Obtener dígito verificador</button>
                    </div>
                    <div class="abajo-content-container">
                        <p>Digito verificador: <span id="mostrar-digito"></span></p>
                    </div>
                </div>
                <button id="btn-siguiente" class="botones" onClick="mostrarSiguienteEjercicio()">Siguiente Ejercicio</button>
            </div>
        </div>
    `
    const seccionADN = document.getElementById('adn')
    seccionADN.innerHTML = `
    
        <div class="contenedor-principal">
            <div class="arriba-contenedor-principal">
                <h1 class="p-3">ADN Verificador</h1>
            </div>
            <div class="under-container">
                <button id="btn-anterior" class="botones" onClick="mostrarEjercicioAnterior()">Ejercicio Anterior</button>
                <div class="content-container" >
                    <div class="arriba-content-container">
                        <label for="autorCromosoma">Ingrese el cromosoma</label>
                        <input type="text" id="autorCromosoma" placeholder="00010111110110100101" required>
                    </div>
                    <div class="abajo-content-container">
                        <h2>SOSPECHOSOS</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Cromosomas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Pedro</td>
                                    <td>00000101010101010101</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Juan</td>
                                    <td>00101010101101110111</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Diego</td>
                                    <td>00100010010000001001</td>
                                </tr>
                            </tbody>
                        </table>
                        <button id="buttonVerify" onclick="verificarADN()">Verificar</button>
                        <div id="verify-text" class="m-3"></div>
                    </div>
                </div>
            </div>
        </div>
    `

    seccionPalabraLarga.style.display='none'
    seccionDigitioVerificador.style.display='none'
    seccionADN.style.display='none'

    const btnAnteriorTennis = document.getElementById('btn-anterior-tennis')
    btnAnteriorTennis.style.display='none'

}

//Funcion para mostrar las siguientes secciones
const mostrarSiguienteEjercicio = () => {
    const seccionTennis = document.getElementById('seccion-juego-tennis');
    const seccionPalabraLarga = document.getElementById('palabra-mas-larga');
    const seccionDigitioVerificador = document.getElementById('digito-verificador');
    const seccionADN = document.getElementById('adn');
    const btnSiguiente = document.getElementById('btn-siguiente')

    displayTennis = window.getComputedStyle(seccionTennis, null).display;
    displayPalabraLarga = window.getComputedStyle(seccionPalabraLarga, null).display;
    displayDigitoVerificador = window.getComputedStyle(seccionDigitioVerificador, null).display;
    displayADN = window.getComputedStyle(seccionADN, null).display;

    if (displayTennis === "grid") {
        seccionTennis.style.display = 'none';
        seccionPalabraLarga.style.display = 'grid';
    } else if (displayPalabraLarga === "grid") {
        seccionPalabraLarga.style.display = 'none';
        seccionDigitioVerificador.style.display = 'grid';
    } else if (displayDigitoVerificador === "grid") {
        seccionDigitioVerificador.style.display = 'none';
        seccionADN.style.display = 'grid';
        btnSiguiente.style.display = 'none'
    } else {
        seccionADN.style.display = 'none';
        seccionTennis.style.display = 'grid';
    }
};

//Funcion mostrar ejercicio anterior
const mostrarEjercicioAnterior = () => {
    const seccionTennis = document.getElementById('seccion-juego-tennis');
    const seccionPalabraLarga = document.getElementById('palabra-mas-larga');
    const seccionDigitioVerificador = document.getElementById('digito-verificador');
    const seccionADN = document.getElementById('adn');
    const btnSiguiente = document.getElementById('btn-siguiente')

    displayTennis = window.getComputedStyle(seccionTennis, null).display;
    displayPalabraLarga = window.getComputedStyle(seccionPalabraLarga, null).display;
    displayDigitoVerificador = window.getComputedStyle(seccionDigitioVerificador, null).display;
    displayADN = window.getComputedStyle(seccionADN, null).display;

    if (displayPalabraLarga === "grid") {
        seccionPalabraLarga.style.display = 'none'
        seccionTennis.style.display = 'grid'
    } else if (displayDigitoVerificador === "grid") {
        seccionDigitioVerificador.style.display = 'none'
        seccionPalabraLarga.style.display = 'grid'
    } else if (displayADN === "grid") {
        seccionADN.style.display = 'none'
        seccionDigitioVerificador.style.display = 'grid'
    }
}


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

//Ejercicio ADN
function verificarADN() {
    const secuencia = document.getElementById('autorCromosoma').value;
    const personas = ['Pedro', 'Juan', 'Diego'];
    const cromosomas = [
      '00000101010101010101',
      '00101010101101110111',
      '00100010010000001001'
    ];
  
    let maxCoincidencias = 0;
    let culpableIndex = -1;
  
    for (let i = 0; i < cromosomas.length; i++) {
      let coincidencias = 0;
      for (let j = 0; j < secuencia.length; j++) {
        if (cromosomas[i][j] === secuencia[j]) {
          coincidencias++;
        }
      }
      if (coincidencias > maxCoincidencias) {
        maxCoincidencias = coincidencias;
        culpableIndex = i;
      }
    }
  
    const porcentajeParentesco = (maxCoincidencias / secuencia.length) * 100;
    const culpable = personas[culpableIndex];
    document.getElementById("verify-text").innerHTML=`El culpable es ${culpable} con un parentezco de ${porcentajeParentesco.toFixed(2)}%`;
  }












