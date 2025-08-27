//Declaracion del arreglo
let listaDeAmigos = [];

//Función creada para asignar texto a los elementos HTML
function asignarTextoElemento (elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    //Valida que el campo no esté vacío
    if (nombreAmigo === "") {
         Swal.fire({
            position: "center",
            icon: "warning",
            title: "Debe ingresar un nombre",
            showConfirmButton: false,
            timer: 3000
        }); 
  
        return; //Detiene la ejecución si el campo está vacío
        
    }

    //Valida que el nombre solo contenga letras y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombreAmigo)) {
            Swal.fire({
            position: "center",
            icon: "warning",
            title: "El nombre solo puede contener letras",
            showConfirmButton: false,
            timer: 3000
        }); 
     
        return; //Detiene la ejecución si la validación falla
    }

     //Validar que el nombre no exista ya en la lista
    const yaExiste = listaDeAmigos.some(nombreExistente => nombreExistente.toLowerCase() === nombreAmigo.toLowerCase());
    if (yaExiste) {
         Swal.fire({
            position: "center",
            icon: "warning",
            title: "Ese nombre ya ha sido agregado",
            showConfirmButton: false,
            timer: 3000
        }); 
 
    return; //Detiene la ejecución si el nombre ya esta en la lista
    }

    //Si todo es correcto, agrega el amigo a la lista y actualiza la interfaz
    Swal.fire({
        title: "¡Nombre agregado!",
        icon: "success",
        draggable: true,
        timer: 3000
    });
      
    listaDeAmigos.push(nombreAmigo);
    lista(); //Llama a tu función para mostrar la lista de amigos

    limpiar(); //Llama la función limpiar para que se limpie el campo de texto cada que se ingrese un numero
    limpiarSorteo(); //Llama la función limpiarSorteo para que al momento de jugar nuevamente la lista de resultado este en blanco
}

//Genera y muestra la lista de amigos en un elemento HTML
function lista (){
      let arreglo = listaDeAmigos.length;
        let contador = 0;
        let contenido = "";
         //Bucle while para recorrer el arreglo de amigos
        while(contador < arreglo)
            {
            //Concatena cada nombre a la cadena 'contenido', agregando un salto de línea (<br>)
            contenido=contenido+listaDeAmigos[contador]+"<li>";
            //Incrementa el contador
            contador++;
            }    
        //Asigna el contenido generado al elemento HTML con el ID '#listaAmigos'
        asignarTextoElemento('#listaAmigos',contenido);
}

let campoDeEntrada = document.getElementById('amigo');

// Agregar un "event listener" que detecta la pulsación de una tecla
campoDeEntrada.addEventListener("keydown", function(event) {
    // Verificar si la tecla presionada es "Enter"
    if (event.key === "Enter" || event.key === 13) {
        // Evitar el comportamiento predeterminado del formulario
        event.preventDefault(); 
        
        // Llamar a la función que agrega al amigo
        agregarAmigo();
    }
});

//Sortea aleatoreamente los nombres almacenados en el arreglo
function sortearAmigo(){
    //Genera un resultado aleatorio con los elementos del arreglo
    let sorteo = Math.floor(Math.random()*listaDeAmigos.length);
    //Valida que el arreglo tenga datos para hecer la operación
    if (listaDeAmigos == ""){
       Swal.fire({
            position: "center",
            icon: "warning",
            title: "Debe ingresar un nombre",
            showConfirmButton: false,
            timer: 3000
        });
    }
    //Realiza el sorteo y imprime el resultado en pantalla
    else {
    asignarTextoElemento('#resultado', `Tu amigo secreto es: ${(listaDeAmigos[sorteo])}`);
    timer: 3000
    //Elimina los datos del arreglo y limpia la lista
    limpiarLista();
    }
}

function limpiarLista() {
    //Vacia el arreglo de amigos.
    listaDeAmigos.length = 0;
    //Limpia el contenido HTML de la lista 
    asignarTextoElemento('#listaAmigos', '');
 
}

function limpiarSorteo (){

    //Limpia el contenido HTML del sorteo 
    asignarTextoElemento('#resultado', '');
 
}
//Limpia el valor del campo de texto 
function limpiar (){

   let valorCaja = document.querySelector('#amigo').value = "";
  
}
