const Producto = function (nombre, numeroImagen, precio, detalles, stock) {
    this.nombre = nombre,
    this.imagen = "../img/product" + numeroImagen +".png"
    this.precio = precio,
    this.detalle = detalles,
    this.stock = stock
    this.favorito = false
};

let listadoProductos = []

function crearProductos () {

    for (let i = 0; i < listNombres.length; i++) {
        let valorImagen = i + 1;
        const nuevoProducto = new Producto(listNombres[i], valorImagen, precios[i], detalles[i], stock[i])
        listadoProductos.push(nuevoProducto)
        console.log(nuevoProducto)
    }
}



// A futuro: Agregar un Integrer que compruebe que precio es igual a un número.