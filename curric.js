
function OcultarymostrarEmpleo() {
     let uno = document.getElementById("boton");
    let dos = document.getElementById("oculto");
    let x = document.getElementById("boton").innerHTML;
    
    if ( x == "Mostrar Mas Empleos")
    {
      uno.innerHTML = 'Mostrar Menos Empleos';
    dos.style.display = "block";
    
    }
   else {
  
         dos.style.display = "none";
         uno.innerHTML = 'Mostrar Mas Empleos';
         
         }
  
   
}

 














