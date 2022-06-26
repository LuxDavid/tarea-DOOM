//--------------------------------------------------INCORPORANDO DOOM----------------------------------------------------------

const contenedor=document.getElementById("contenido_principal");


function crearOpciones(){
// debugger

 const alimentos=["Tacos","burritos","empanadas", "chilaquiles_verdes", "chilaquiles_rojos", "huevos", "emparedado", "arroz","choripan"];

for (const opcion of alimentos) {

    const div=document.createElement("div");
    div.className="platillo";
    div.innerHTML=`<h2>${opcion}</h2>`
    contenedor.append(div);

}


}

crearOpciones();

//-------------------------------------------------------------EVENTOS----------------------------------------------------------------

const usuario=document.getElementById("usuario");
const clave=document.getElementById("clave");

let correoUsuario=" ";

usuario.addEventListener("blur", (e)=>{
        
correoUsuario= e.target.value;

console.log(correoUsuario);


});   

//------------------------------------------------------------------------------------------------------------------------------------

let claveUsuario="";

clave.addEventListener("blur", (e)=>{
        
    claveUsuario= e.target.value;
    
    console.log(claveUsuario);
    
    
    });   

//-----------------------------------------------------------------------------------------------

function tocarBotones(){

const botones=document.getElementsByClassName("boton");

for (const boton of botones) {
    
    boton.addEventListener("mouseover",()=>boton.className="sobreBoton");
    boton.addEventListener("mouseout",()=>boton.className="");

}

}

tocarBotones();

//-----------------------------------------------------------------------------------------

document.addEventListener("submit", (e)=>{

e.preventDefault(e)

alert("Iniciando sesion")

});


//------------------------------------------------------------------------------------

const opciones=document.getElementsByClassName("platillo");

for (const opcion of opciones) {

opcion.addEventListener("click",()=>opcion.style.background="black");
opcion.addEventListener("dblclick",()=>opcion.style.background="white");

}

