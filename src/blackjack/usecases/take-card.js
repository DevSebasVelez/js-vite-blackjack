/**
 * Esta Funcion me extrae la ultima carta del deck mezclado
 * @param {Array<String>} deck
 * @returns {<String>}
 */

export const pedirCarta = ( deck ) => {

    const carta = deck.pop();  //Toma ultimo valor del arreglo
    return carta;
}