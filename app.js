// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];




function campoNombre(){ // escribir nombre
    
    
}

function agregarAmigo(){
    let entradaUsuario = document.getElementById('amigo').value;
    asignarTextoElemento('h2',entradaUsuario);
    amigos.push(entradaUsuario);
    return;
    
}
console.log(amigos);

function sortearAmigo(){

}

function limpiarCampo(){
    document.querySelector('amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}