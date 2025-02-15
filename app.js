// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let entradaUsuario = document.getElementById('amigo').value;
    asignarTextoElemento('#listaAmigos',entradaUsuario); //
    amigos.push(entradaUsuario);
    limpiarCampo();
}

function sortearAmigo(){
    sorteo= amigos.sort(() => Math.random() - 0.5); 
    asignarTextoElemento('#resultado',nombreSorteado);
}

function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}