let usuarioTXT = document.getElementById("usuario");
let p = document.getElementById("mensaje");


function login(){
    //login aqui
    p.innerHTML = "Login correcto, " + usuarioTXT.value;

    limpiar();
}

function registro(){
    p.innerHTML = "Registro correcto, " + usuarioTXT.value;
}

function limpiar(){


}
