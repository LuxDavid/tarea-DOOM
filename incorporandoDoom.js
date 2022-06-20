//Clase constructora de productos
class Ordenes {
    constructor(comida, cantidad, precio) {
        this.comida = comida;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}


//Funcion para registrar y notificar al usuario al termino del ingreso de datos requeridos
function registrarUsuario() {
    let usuario = prompt("Dinos cual es tu nombre para poder registrar tu pedido =D");

    while ((usuario <= 0) || (usuario >= 0) || (usuario == false)) {
        usuario = prompt("Dinos cual es tu nombre para poder registrar tu pedido =D");
    }

    return alert("Hola " + usuario + " esto es lo que ordenaste");
}


//Funcion para recorrer y mostrar los datos que fueron introducidos en el array
function mostrarOrden() {

    pedidoFinal.forEach((producto) => {
        console.table(producto);
    })
}


//Funcion para pedir un reingreso de datos si es que se desea incluir algo mas
function seguirOrdenando() {
    let comprobacion = prompt("¿Deseas ordenar algo mas? SI o No").toLocaleLowerCase();
    while ((comprobacion <= 0) || (comprobacion >= 0) || (comprobacion == false)) {
        comprobacion = prompt("Elige una comida: Burrito, Tacos, Empanada").toLocaleLowerCase();
    }
    switch (comprobacion) {
        case "si":
            ordenar();
            break;

        case "no":
            registrarUsuario();
            mostrarOrden();

        default: "Algo salio mal";
    }
}

//Funcion para realizar el calculo entre de la cantidad de productos ordenados por el precio correspondiente de cada uno
function sumarProductos(cantidad, precio) {
    return cantidad * precio;
}

//Funcion para mostrar el resultado final de los precios numericos acumulados en el array
function precioFinal() {

    let cobrar = pedidoFinal.reduce((acumulador, cantidad) => acumulador + cantidad.precio, 0)
    console.log("La cuenta es :" + cobrar + " pesos");
}

//Array para el futuro ingreso de datos por el usuario
const pedidoFinal = [];


//Funcion principañ que pide informacion y en base a eso hace un comprobacion de datos correctose e introduce la informacion en el array
function ordenar() {
    // debugger

    let comida = prompt("Elige una comida: Burrito, Tacos, Empanada").toLocaleLowerCase();
    let cantidad = parseInt(prompt("¿Cuantos desear ordenar"));
    let precio = 0;

    while ((comida <= 0) || (comida >= 0) || (comida == false) || !(cantidad > 0)) {
        comida = prompt("Elige una comida: Burrito, Tacos, Empanada").toLocaleLowerCase();
        cantidad = parseInt(prompt("¿Cuantos desear ordenar"));
    }

    switch (comida) {
        case "tacos":
            precio = 10 * cantidad;
            break;

        case "burrito":
            precio = 20 * cantidad;
            break;

        case "empanada":
            precio = 17 * cantidad;
            break;
    }

    sumarProductos(cantidad, precio);

    pedidoFinal.push(new Ordenes(comida, cantidad, precio));

    seguirOrdenando();

}

// ordenar();
// precioFinal();


//INCORPORANDO DOOM



function crearOpciones(){
// debugger

const alimentos=[1,2,3,4,5];


const contenedor=document.getElementById("contenido_principal")



for (const opcion of alimentos) {


    const div=document.createElement("div");
    div.className="platillo";
    div.innerHTML=opcion;
    div.innerHTML="<img class=images__platillos src=images/burritos3.jpg alt=Burritos mexicanos title=Burritos mexicanos>"
    contenedor.append(div);

        
}


}

crearOpciones()

