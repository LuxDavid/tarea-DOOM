
//Funcion para realizar el calculo entre de la cantidad de productos ordenados por el precio correspondiente de cada uno
function sumarProductos(cantidad, precio) {
    return cantidad * precio;
}

//Funcion para mostrar el resultado final de los precios numericos acumulados en el array
function precioFinal() {

    let cobrar = pedidoFinal.reduce((acumulador, cantidad) => acumulador + cantidad.precio, 0)
    console.log("La cuenta es :" + cobrar + " pesos");
}

//Funcion principañ que pide informacion y en base a eso hace un comprobacion de datos correctose e introduce la informacion en el array
function ordenar() {
    // debugger

    let comida = prompt("Elige una comida: Burrito, Tacos, Empanada").toLocaleLowerCase();
    let cantidad = parseInt(prompt("¿Cuantos desear ordenar"));
    let precio = 0;

    sumarProductos(cantidad, precio);

    pedidoFinal.push(new Ordenes(comida, cantidad, precio));

}

