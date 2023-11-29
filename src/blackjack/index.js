import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML }  from './usecases/index.js';


/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Corazones Negros)
 */

// Variables
let deck        = [];
let tipos       = ['C', 'D', 'H', 'S'];
let especiales  = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const mostrarPuntos = document.querySelectorAll('small');



deck = crearDeck(tipos, especiales);    // Deck mezclado





// EVENTOS
// BOTON PEDIR CARTA
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta( deck );
    puntosJugador = puntosJugador + valorCarta( carta );
    mostrarPuntos[0].innerText = puntosJugador;           // Primer 'small' que encuentre

    //Insertar carta al HTML
    const imgCarta = crearCartaHTML( carta )
    divCartasJugador.append(imgCarta);               //Lo colocamos en el div seleccionado (referencia)

    if( puntosJugador > 21 ) {
        alert('Perdiste');
        btnPedir.disabled = true;                   //Bloquea el boton
        turnoComputadora(puntosJugador, mostrarPuntos[1], divCartasComputadora, deck);

    } else if (puntosJugador === 21) {
        alert('Ganaste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador, mostrarPuntos[1], divCartasComputadora, deck);
    }
} );


// BOTON DETENER
btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador, mostrarPuntos[1], divCartasComputadora, deck);
});



// BOTON NUEVO JUEGO
btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador       = 0;
    puntosComputadora   = 0;

    mostrarPuntos[0].innerText  = 0;
    mostrarPuntos[1].innerText  = 0;

    divCartasComputadora.innerHTML  = ''; // Se manda vació para borrar las imágenes
    divCartasJugador.innerHTML      = '';

    btnDetener.disabled  = false;
    btnPedir.disabled    = false;
})
