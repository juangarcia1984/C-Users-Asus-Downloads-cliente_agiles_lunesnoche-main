//pasos para capturar la info de un formulario usando js

//1. se almacena cada input, select o area en una variable

let cajaDescripcion = document.getElementById("descripcion");
let cajaFecha = document.getElementById("fecha");
let cajaValorGasto = document.getElementById("valor");
let cajaCategoria = document.getElementById("categoria");

//2. se almacena el boton del formulario en una variable

let botonFormulario = document.getElementById("botonRegistro");

//3. se detectan los eventos del formulario

botonFormulario.addEventListener("click", function(evento){
    evento.preventDefault()

//4. se capturan los datos

let gasto = {
    id : 5,
    categoria : cajaCategoria.value,
    fecha : cajaFecha.value,
    descripcion : cajaDescripcion,
    valor : cajaValorGasto.value
}
console.log(gasto)

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      
})