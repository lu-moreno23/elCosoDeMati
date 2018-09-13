

function armarListaHTML (listado) {
for (let i = 0; i < listado.length; i++) {
    let clon = document.getElementsByClassName("modelo")[0];
    let nuevoDiv = clon.cloneNode(true);
    nuevoDiv.classList.remove("modelo");
    let nombre = nuevoDiv.getElementsByClassName("datosProducto")[0].getElementsByTagName("h1")[0]
    nombre.innerHTML = listado[i].nombre;




    //Lo ingreso al HTML
    document.body.appendChild(nuevoDiv);
    }
}

armarListaHTML(listadoProductos)