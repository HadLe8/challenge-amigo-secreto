let amigos=[];
let amigosCopia=[];


function agregarAmigo(){
    //Obtener la entrada de usuario
    let entradaUsuario = document.getElementById('amigo').value;
    if(entradaUsuario == ''){
        alert("Ingresa un nombre válido");
    }else{
        let nuevoElemento = document.createElement('div');
        nuevoElemento.textContent = entradaUsuario;
        // Obtener el contenedor donde se mostrarán los nombres
        let listaAmigos = document.getElementById('listaAmigos');   
        // Agregar el nuevo elemento al contenedor
        listaAmigos.appendChild(nuevoElemento);
        //añadir elementos al array
        amigos.push(entradaUsuario);
        //limpiar entrada usuario
        limpiarCampo('#amigo');
    }
    return;
}

function sortearAmigo(){
    if(amigos == ''){
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
    return;
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