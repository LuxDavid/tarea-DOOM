//-------------------------------------------------------------EVENTOS----------------------------------------------------------------


usuario.addEventListener("blur", (e)=>{
        
correoUsuario= e.target.value;

console.log(correoUsuario);


});   

//------------------------------------------------------------------------------------------------------------------------------------

clave.addEventListener("blur", (e)=>{
        
    claveUsuario= e.target.value;
    
    console.log(claveUsuario);
    
    
    });   

//----------------------------------------------------------------------------------------------------------------------------------

document.addEventListener("submit", (e)=>{

e.preventDefault(e)

alert("Iniciando sesion")

});

//--------------------------------------------------INCORPORANDO DOOM----------------------------------------------------------

function crearOpciones(){

    for (const opcion of alimentos) {
    
        const div=document.createElement("div");
        div.className="platillo";
        div.innerHTML=`<h2 class="nombre_alimento">${opcion}</h2>`
        contenedor.append(div);
    
    }
    
    
    }
    
    crearOpciones();

    //-----------------------------------------------------------------------------------------------

function tocarBotones(){

    const botones=document.getElementsByClassName("boton");
    
    for (const boton of botones) {
        
        boton.addEventListener("mouseover",()=>boton.className="sobreBoton");
        boton.addEventListener("mouseout",()=>boton.className="");
    
    }
    
    }
    
    tocarBotones();

    //-----------------------------------------------------------------------------------------------------------------------------------


for (const opcion of opciones) {

    opcion.addEventListener("click",()=>{
        
    opcion.style.background="black";
    
    })
    
    opcion.addEventListener("dblclick",()=>opcion.style.background="white");
    
    
    }