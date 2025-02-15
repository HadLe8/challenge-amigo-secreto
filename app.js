// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let amigosCopia= amigos.slice();

function agregarAmigo(){
    let entradaUsuario = document.getElementById('amigo').value;
    asignarTextoElemento('#listaAmigos',entradaUsuario); //
    amigos.push(entradaUsuario);
    limpiarCampo();
    console.log(amigos);
}

function sortearAmigo(){
    nombreSorteado= amigosCopia.sort(() => Math.random() - 0.5); 
    asignarTextoElemento('#resultado',nombreSorteado[0]);
    console.log(amigosCopia);
}

function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}