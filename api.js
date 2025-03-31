function loadCats(quantity, tag = '') {
    const gallery = document.getElementById('gallery');
    // Se limpia el contenido de la galería antes de cargar nuevas imágenes.
    gallery.innerHTML = '';
    const fragment = document.createDocumentFragment();
    /*
        Crea un fragmento de documento, una estructura en memoria que 
        permite construir múltiples elementos antes de agregarlos al DOM, 
        reduciendo actualizaciones innecesarias y mejorando el rendimiento.
    */
    try {
        for (let i = 0; i < quantity; i++) {
            const img = document.createElement('img');
            /* 
                El operador ternario se utiliza para verificar si la variable `tag` tiene un valor:
                - Si `tag` tiene un valor (es verdadero), se agrega `/${tag}` a la URL.
                - Si `tag` no tiene un valor (es falso), no se agrega nada (cadena vacía).

                Con "Date.now() + i", se agrega un parámetro aleatorio para 
                evitar caché y forzar al navegador a descargar una nueva imagen 
                en cada solicitud.
            */
            img.src = `https://cataas.com/cat${tag ? `/${tag}` : ''}?${Date.now() + i}`;
            img.alt = 'Cat Image';
            img.onerror = () => {
                // Si la imagen no se carga, no se agrega al fragmento
                img.remove();
            };
            // Se agrega evento para abrir modal.
            img.addEventListener('click', () => openModal(img.src));
            fragment.appendChild(img);
        }
    } catch (error) {
        console.error('Error:', error);
    }
    gallery.appendChild(fragment);
}

// Manejar el evento de búsqueda
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('search').value.trim();
    /*
        .value obtiene el valor actual del input (lo que el usuario escribió).
        .trim() elimina los espacios en blanco al inicio y al final del texto ingresado.
    */
    const tag = searchInput ? searchInput : ''; // Si no hay texto, no se agrega tag
    loadCats(23, tag); // Cargar gatos con el tag especificado
});

// Abre el modal y muestra la imagen seleccionada.
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = src;
    modal.style.display = 'flex';
}

// Cierra el modal al hacer clic en cualquier parte de él.
document.getElementById('modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});