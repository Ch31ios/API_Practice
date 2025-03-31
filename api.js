function loadCats(quantity) {
    const gallery = document.getElementById('gallery');
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
                Se agrega un parámetro aleatorio para evitar caché y forzar al 
                navegador a descargar una nueva imagen en cada solicitud.
            */
            img.src = `https://cataas.com/cat?${Date.now() + i}`;
            img.alt = 'Cat Image';
            // Se agrega evento para abrir modal.
            img.addEventListener('click', () => openModal(img.src));
            fragment.appendChild(img);
        }
    } catch (error) {
        console.error('Error:', error);
    }
    gallery.appendChild(fragment);
}

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

loadCats(23); // Llamamos a la función con la cantidad de imágenes deseada.