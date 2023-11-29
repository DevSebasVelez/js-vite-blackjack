import { pedirCarta } from "./take-card";
import { valorCarta } from "./card-value";
import { crearCartaHTML } from "./create-card";



/**
 * TURNO DE LA COMPUTADORA
 * @param {Number} puntosMinimos
 * @param {HTMLElement} mostrarPuntos
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos, mostrarPuntos, divCartasComputadora, deck ) => {

    let puntosComputadora = 0;          //Declaramos aquí porque solo en esta Funcion se usa esta variable

    do {
        const carta = pedirCarta( deck );
        puntosComputadora = puntosComputadora + valorCarta( carta );
        mostrarPuntos.innerText = puntosComputadora;           // Segundo 'small' que encuentre

        //Insertar carta al HTML
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append(imgCarta);           //Lo colocamos en el div seleccionado (referencia)

        if(puntosMinimos > 21) {   //Jugador ya perdió, la computadora gana con cualquiera
            break;
        }

    } while ((puntosComputadora < puntosMinimos)  &&  (puntosMinimos <= 21) )

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie Gana');

        } else if (puntosComputadora > 21) {
            alert('Ganaste');

        } else if (puntosComputadora === 21) {
            alert('Computadora Gana');

        } else if (puntosComputadora > puntosMinimos) {
            alert('Computadora Gana')
        }
    }, 40);
}
