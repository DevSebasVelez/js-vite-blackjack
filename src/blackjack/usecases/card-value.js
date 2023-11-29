

/**
 * Esta función me extrae el valor de la carta que me da la función pedirCarta
 * @param {<String>} carta
 * @returns {<Number>} Valor de la carta
 */
// VALOR CARTA (ternarios)
export const valorCarta = ( carta ) => {
    const valor = carta.substring( 0, carta.length - 1 );

    return ( isNaN( valor ) ) ?     // is NOT a NUMBER (si el valor NO es un numero entonces:has la otra condición)
            (valor === 'A') ? 11 : 10
            : valor * 1;  // Pero si valor SI es un numero, convierte el tipo de dato a numero (* 1)
}





// VALOR CARTA CON IF Y ELSE TRADICIONAL
//     if( isNaN(valor) ) {

//         puntos = ( valor === 'A' ) ? 11 : 10    // Solo A vale 11, J Q K valen 10

//     } else {

//         puntos = valor * 1;    // Convierte string a un numero
//     }
// }

// valorCarta(pedirCarta());