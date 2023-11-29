
/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement}  retorna una imagen
 */
export const crearCartaHTML = ( carta ) => {

    //Insertar carta al HTML
    const imgCarta = document.createElement('img');  //Creamos una imagen y asignamos a imgCarta
    imgCarta.src = `/assets/cartas/${carta}.png`;    //Agregamos la ubicacion
    imgCarta.classList.add('carta');                 //Agregamos una clase

    return imgCarta;
}