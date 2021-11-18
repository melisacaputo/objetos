//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, talle, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.talle = talle;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Cargo el stock de productos que pertenecen a la clase producto
const remera1 = new Producto("Remera Cobra", 1, 2000, "Negro", "XL", 30);
const remera2 = new Producto("Musculosa Good Times", 2, 1400, "Blanco", "S", 10);
const buzo1 = new Producto("Buzo Scream", 3, 4500, "Negro", "M", 20);
const buzo2 = new Producto("Buzo Negro Oversized", 4, 3800, "Negro", "M", 40);


//Simulador de la entrega anterior simplificado
function calcularPrecio(precioPrenda, cantidadPrenda, costoEnvio) {
    return (precioPrenda * cantidadPrenda) + costoEnvio;
}

//Solicito datos al comprador
alert("Productos:" + "\n" + "(1) Remera Cobra XL $2.000" + "\n" + "(2) Musculosa Good Times S $1.400" + "\n" + "(3) Buzo Scream M $4.500" + "\n" + "(4) Buzo Negro Oversized M $3.800");
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar de la prenda:"));
const envio = 800; //costo de envio promedio en CABA

//Salida de consola con el precio final segun el ID elegido
if (prendaSeleccionada == remera1.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(remera1.precio, cantidad, envio));
    remera1.vender(cantidad);
} else if (prendaSeleccionada == remera2.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(remera2.precio, cantidad, envio));
    remera2.vender(cantidad);
} else if (prendaSeleccionada == buzo1.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(buzo1.precio, cantidad, envio));
    buzo1.vender(cantidad);
} else if (prendaSeleccionada == buzo2.id) {
    alert("El precio final de tu compra es: $" + calcularPrecio(buzo2.precio, cantidad, envio));
    buzo2.vender(cantidad);
} else {
    alert("Error - ingrese un ID valido");
}