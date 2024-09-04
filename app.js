/ Manejar el menú desplegable
document.querySelectorAll('.download-item h2').forEach(item => {
    item.addEventListener('click', () => {
        const dropdown = item.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});

// Lógica para la galería de imágenes
const listado = [
    {
        imagen: './images/brunoBrunner.jpg',
        title: 'Bruno Brunner',
    },
    {
        imagen: './images/corazondecristalmarketing.jpg',
        title: 'Corazon de Cristal',
    },
    {
        imagen: './images/fabioliebremarketing.jpg',
        title: 'Fabio Liebre',
    },
    {
        imagen: './images/gingerboymarketing.jpg',
        title: 'Ginger Boy'
    },
];

const contenedor = document.querySelector('.fotoimagen');
let index = 0;

// Agregar la imagen estática de Hortensio al contenedor una vez
const imgHortensio = document.createElement('img');
imgHortensio.src = './images/hortensio.png';
imgHortensio.className = 'imagenHortensio'; // Puedes definir un estilo para esta imagen si lo necesitas
contenedor.appendChild(imgHortensio); // Agregar la imagen hortensio una vez y no se elimina

function cambiarImagen() {
    // Limpiar el contenido dinámico pero mantener la imagen de Hortensio
    contenedor.querySelectorAll('.imagenDinamica, .tituloFoto').forEach(el => el.remove());

    // Imagen dinámica del listado
    const img = document.createElement('img');
    const titulo = document.createElement('h2');
    titulo.innerHTML = listado[index].title;
    img.src = listado[index].imagen;
    img.className = 'imagenDinamica';
    titulo.className = 'tituloFoto';

    contenedor.appendChild(titulo);
    contenedor.appendChild(img);

    index = (index + 1) % listado.length; // Avanzar al siguiente índice, y volver al inicio si es necesario
}

setInterval(cambiarImagen, 5000); // Cambiar imagen cada 5 segundos

// Iniciar con la primera imagen
cambiarImagen();



// Llamar a la función para obtener y mostrar los datos




// Llamar a la función para obtener y mostrar los datos
