//Archivo de Javascript


var campoTexto= document.getElementById("campoTexto");

console.log(campoTexto);

function imprimir(){
    console.log(campoTexto.value);
}

function limpiar(){
    campoTexto = " ";
}