//Clase constructora de productos
class Ordenes {
    constructor(comida, cantidad, precio) {
        this.comida = comida;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const contenedor=document.getElementById("contenido_principal");

const usuario=document.getElementById("usuario");
const clave=document.getElementById("clave");

let correoUsuario=" ";

let claveUsuario="";

const opciones=document.getElementsByClassName("platillo");


const alimentos=["Tacos","burritos","empanadas", "chilaquiles verdes", "chilaquiles rojos", "huevos", "emparedado", "arroz","choripan"];

//Array para el futuro ingreso de datos por el usuario
const carrito = [];

const nombres=document.getElementsByClassName("nombre_alimento");