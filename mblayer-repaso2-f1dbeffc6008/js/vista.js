

function armarListaHTML (listado) {
for (let i = 0; i < listado.length; i++) {
    // Acá elegimos el DIV oculto en el HTML como un "modelo" a clonar.
    let clon = document.getElementsByClassName("modelo")[0];
    // Acá lo clonamos y le quitamos la clase "modelo" (Para que sea visible)
    let nuevoDiv = clon.cloneNode(true);
    nuevoDiv.classList.remove("modelo");
    // Acá ingresamos el nombre del producto al DIV.
    let nombre = nuevoDiv.getElementsByClassName("datosProducto")[0].getElementsByTagName("h1")[0]
    nombre.innerHTML = listado[i].nombre;
    // Acá ingresamos el precio del producto al DIV.
    let precio = nuevoDiv.getElementsByClassName("datosProducto")[0].getElementsByTagName("p")[0]
    precio.innerHTML = listado[i].precio;
    // Acá ingresamos la foto del producto al DIV.
    let foto = nuevoDiv.getElementsByClassName("fotoProducto")[0].getElementsByTagName("img")[0]
    foto.src = listado[i].imagen;

    //Lo ingreso al HTML
    document.body.appendChild(nuevoDiv);
    }
}

armarListaHTML(listadoProductos)