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



//--------------------------------------------------------------------------------------------------------------------------------------

function tocarBotones(){

    const botones=document.getElementsByClassName("boton");
    
    for (const boton of botones) {
        
        boton.addEventListener("mouseover",()=>boton.className="sobreBoton");
        boton.addEventListener("mouseout",()=>boton.className="");
    
    }
    
    }
    
    tocarBotones();

    //-----------------------------------------------------------------------------------------------------------------------------------




    //--------------------------------------------------INCORPORANDO DOOM----------------------------------------------------------

function crearOpciones(){

            for (const opcion of alimentos) {
    
                const div=document.createElement("div");
                div.className="platillo";
                div.innerHTML=`<h2 class="nombre_alimento">${opcion}</h2>`
                
                contenedor.append(div);

              div.addEventListener("click", ()=> agregarCarrito(`${opcion}`));
            
            }
    
    for (const opcion2 of opciones) {

        opcion2.addEventListener("click",()=>{
            
        opcion2.style.background="black";
    
        
        })
        
        opcion2.addEventListener("dblclick",()=>opcion2.style.background="white");
        
        
        }
    }
    
    crearOpciones();

//-----------------------------------------------------------------------------------------------------------------------------------

function agregarCarrito(opcion){

carrito.push(opcion);

}