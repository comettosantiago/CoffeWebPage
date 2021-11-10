//---------------Carrusel-----------------
addEventListener('DOMContentLoaded', () => {
    const imagenes = ['./fuentes/imagen1.jpg', './fuentes/imagen2.jpg', './fuentes/imagen3.jpg']

    let i = 1
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');

    img1.src = imagenes[0];

    const carrusel = () => {
        img2.src = imagenes[i];
        img2.classList.add('activo');
        i++;
        if (i == imagenes.length) {
            i = 0;
        }
        setTimeout(() => {
            img2.classList.remove('activo')
            img1.src = img2.src;
        }, 1000)
    }

    setInterval(carrusel, 3000);

})

