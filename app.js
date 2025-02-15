// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let amigosCopia=[];

function agregarAmigo(){
    let entradaUsuario = document.getElementById('amigo').value;
    asignarTextoElemento('#listaAmigos',entradaUsuario); // usar la función para imprimir en el elemento
    amigos.push(entradaUsuario); //añadir elementos al array
    limpiarCampo('#amigo');
}

function sortearAmigo(){
    limpiarCampo('#listaAmigos');
    amigosCopia= amigos.slice(); // copiar matriz
    //compara si la posición del arreglo es positivo o negativo y lo ordena
    nombreSorteado= amigosCopia.sort(() => Math.random() - 0.5);  //Genera un numero aleatorio entre -0.5 y 0.5(equilibrio entre positivos y negativos)
    asignarTextoElemento('#resultado',nombreSorteado[0]);
}

function limpiarCampo(id){
    document.querySelector(id).value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}