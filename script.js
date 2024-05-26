function readMore (){

    const contenido = 
        document.getElementById('rest-of-text-hidden'); 
    const boton = 
        document.getElementById('button-id'); 
    const dots = document.getElementById("dots") 
  
    if (contenido.style.display === 'none'
        || contenido.style.display === '') { 
        contenido.style.display = 'inline'; 
        dots.style.display = "none"; 
        boton.textContent = 'Read Less'; 
    } else { 
        contenido.style.display = 'none'; 
        boton.textContent = 'Read More'; 
        dots.style.display = "inline"; 
    } 
}

