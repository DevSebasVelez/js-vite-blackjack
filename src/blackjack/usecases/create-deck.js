import _ from 'underscore';

/**
 * Esta Funcion me permite crear un nuevo Deck
 * @param {array<string>} tiposDeCarta
 * @param {array<string>} tiposEspeciales
 * @returns {array<string>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error ('Tipos de Carta es Obligatorio');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error ('Tipos de Especiales es Obligatorio');



    let deck = [];

    for(let i = 2; i <= 10; i++) {
        for( let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }

    for( let tipo of tiposDeCarta) {
        for( let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }

    deck = _.shuffle( deck );   //Funcion shuffle de librería UNDERSCORE

    return deck;
}
