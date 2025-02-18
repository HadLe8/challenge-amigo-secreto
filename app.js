let amigos=[];
let amigosCopia=[];


function agregarAmigo(){
    //Obtener la entrada de usuario
    let entradaUsuario = document.getElementById('amigo').value;
    if(entradaUsuario == ''|| !/^[a-zA-Z]+$/.test(entradaUsuario) ){
        //Validar si el espacio no esta vacio o es numero
        alert("Ingresa un nombre válido");
    }else{
        // Obtener el contenedor donde se mostrarán los nombres- nodo padre
        let listaAmigos = document.getElementById('listaAmigos');  
        // Crear un nodo hijo
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = entradaUsuario;
        // Agregar el nuevo elemento al contenedor- pilar
        listaAmigos.appendChild(nuevoElemento);
        //Añadir elementos al array
        amigos.push(entradaUsuario);
        //Limpiar entrada usuario
        limpiarCampo('#amigo');
    }
    return;
}

function sortearAmigo(){
    if(amigos == '' ){
        //Validar si el espacio no esta vacio
        alert("Aún no se han agregado nombres");
    }else{
        // Limpia el contenido de #listaAmigos
        asignarTextoElemento('#listaAmigos'," "); 
        // Copia el array de amigos
        amigosCopia = amigos.slice();
        //Sortea posiciones aleatoriamente
        nombreSorteado = amigosCopia.sort(() => Math.random() - 0.5); 
        //Muestra la primera posición del array sorteado
        asignarTextoElemento('#resultado', nombreSorteado[0]);
    }
    setTimeout(reiniciarJuego, 3000);
    return;
}

function reiniciarJuego(){
    //Limpiar array y texto para una nueva jugada
    asignarTextoElemento('#resultado'," "); 
    amigos= [];
    amigosCopia=[];
}

function asignarTextoElemento(elemento, texto) {
    //Asignar texto a un elemento
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCampo(id){
    //Darle valor vacio a un elemento
    document.querySelector(id).value = '';
    return;
}
