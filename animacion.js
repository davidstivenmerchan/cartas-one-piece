let cartas = document.querySelectorAll(".contenedor");


cartas.forEach(carta => {

    carta.addEventListener("click",()=>{
        let atributo = carta.getAttribute("frente");
        if(atributo=="true"){
            carta.setAttribute("frente","false");
            carta.classList.remove("voltear");
   
        }else{
            carta.setAttribute("frente","true");
            carta.classList.add("voltear");
    
        }
    });
});

    
