function loadCats(quantity) {
    const gallery = document.getElementById('gallery');
    const fragment = document.createDocumentFragment();
    /*
        Crea un fragmento de documento, una estructura en memoria que 
        permite construir múltiples elementos antes de agregarlos al DOM, 
        reduciendo actualizaciones innecesarias del DOM y mejorando 
        el rendimiento.
    */
    for (let i = 0; i < quantity; i++) {
        const img = document.createElement('img');
        img.src = `https://cataas.com/cat?${Date.now() + i}`;
        /* 
            Se agrega un parámetro aleatorio para evitar caché y forzar al 
            navegador a descargar una nueva imagen en cada solicitud
        */
        img.alt = 'Cat Image';
        fragment.appendChild(img);
    }
    gallery.appendChild(fragment);
}

loadCats(20); // Llamamos a la función con la cantidad de imágenes deseada