// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let amigosCopia=[];

function limpiarCampo(id){
    document.querySelector(id).value = '';
}

function agregarAmigo(){
    let entradaUsuario = document.getElementById('amigo').value;
    asignarTextoElemento('#listaAmigos',entradaUsuario); // usar la función para imprimir en el elemento
    amigos.push(entradaUsuario); //añadir elementos al array
    limpiarCampo('#amigo');
}

function sortearAmigo(){
    asignarTextoElemento('#listaAmigos'," "); // Limpia el contenido de #listaAmigos
    amigosCopia = amigos.slice(); // Copia el array de amigos
    nombreSorteado = amigosCopia.sort(() => Math.random() - 0.5); //sortea posiciones aleatoriamente
    asignarTextoElemento('#resultado', nombreSorteado[0]);
    
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}