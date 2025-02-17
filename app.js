let amigos=[];
let amigosCopia=[];


function agregarAmigo(){
    //Borrar resultado del juego anterior
    asignarTextoElemento('#resultado'," "); 
    //Obtener la entrada de usuario
    let entradaUsuario = document.getElementById('amigo').value;
    if(entradaUsuario == ''|| !/^[a-zA-Z]+$/.test(entradaUsuario) ){
        alert("Ingresa un nombre válido");
    }else{
        // Obtener el contenedor donde se mostrarán los nombres- nodo padre
        let listaAmigos = document.getElementById('listaAmigos');  
        // Crear un nodo hijo
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = entradaUsuario;
        // Agregar el nuevo elemento al contenedor- pilar
        listaAmigos.appendChild(nuevoElemento);
        //añadir elementos al array
        amigos.push(entradaUsuario);
        //limpiar entrada usuario
        limpiarCampo('#amigo');
    }
    return;
}

function sortearAmigo(){
    asignarTextoElemento('#resultado'," "); 
    if(amigos == '' ){
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
    reiniciarJuego();
    return;
}

function reiniciarJuego(){
    //limpiar array para una nueva jugada
    amigos= [];
    amigosCopia=[];
}

function asignarTextoElemento(elemento, texto) {
    //asignar texto a un elemento
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCampo(id){
    //Darle valor vacio a un elemento
    document.querySelector(id).value = '';
    return;
}