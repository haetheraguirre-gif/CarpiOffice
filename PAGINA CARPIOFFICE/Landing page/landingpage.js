let indiceActual = 0;
const imagenes = document.querySelectorAll('.carrusel-imagenes img');
const puntos = document.querySelectorAll('.ellipse-parent .punto');

function mostrarSlide(index) {
    // Validar límites
    if (index >= imagenes.length) indiceActual = 0;
    if (index < 0) indiceActual = imagenes.length - 1;

    // Remover clases activas de todas las imágenes y puntos
    imagenes.forEach(img => img.classList.remove('activo'));
    puntos.forEach(punto => punto.classList.remove('activo'));

    // Activar la imagen y el punto correspondiente
    imagenes[indiceActual].classList.add('activo');
    puntos[indiceActual].classList.add('activo');
}

function cambiarSlide(index) {
    indiceActual = index;
    mostrarSlide(indiceActual);
}

// Cambio automático cada 4 segundos
setInterval(() => {
    indiceActual++;
    mostrarSlide(indiceActual);
}, 4000);