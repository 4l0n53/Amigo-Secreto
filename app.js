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
    if (nombreAmigo.trim() === "") {
        asignarTextoElemento('h2', 'Debe ingresar un nombre.');
        return; //Detiene la ejecución si el campo está vacío
    }

    //Valida que el nombre solo contenga letras y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombreAmigo)) {
        asignarTextoElemento('h2', 'El nombre solo puede contener letras.');
        return; //Detiene la ejecución si la validación falla
    }

     //Validar que el nombre no exista ya en la lista
    const yaExiste = listaDeAmigos.some(nombreExistente => nombreExistente.toLowerCase() === nombreAmigo.toLowerCase());
    if (yaExiste) {
    asignarTextoElemento('h2', 'Ese nombre ya ha sido agregado.');
    return; //Detiene la ejecución si el nombre ya esta en la lista
    }

    //Si todo es correcto, agrega el amigo a la lista y actualiza la interfaz
    asignarTextoElemento('h2', '¡Nombre agregado!');
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

//Sortea aleatoreamente los nombres almacenados en el arreglo
function sortearAmigo(){
    //Genera un resultado aleatorio con los elementos del arreglo
    let sorteo = Math.floor(Math.random()*listaDeAmigos.length);
    //Valida que el arreglo tenga datos para hecer la operación
    if (listaDeAmigos == ""){
        asignarTextoElemento('h2', 'Por favor ingrese un nombre antes de Sortear!!')
    }
    //Realiza el sorteo y imprime el resultado en pantalla
    else {
    asignarTextoElemento('#resultado', `Tu amigo secreto es: ${(listaDeAmigos[sorteo])}`);
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
