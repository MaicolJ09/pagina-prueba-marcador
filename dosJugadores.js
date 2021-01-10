

var contadorA = 0;
var contadorB = 0;
var dos = 2;
var tres = 3;
var cuatro = 4;

function contadorBlanca(){
    document.getElementById("botonBlanca").innerHTML = ++contadorB;
}

function contadorAmarilla(){
    document.getElementById("botonAmarilla").innerHTML = ++contadorA;
}

function menos1b(){
    document.getElementById("botonBlanca").innerHTML = --contadorB;
}
function mas2b(){
    document.getElementById("botonBlanca").innerHTML = (contadorB = contadorB + 2);
}
function mas3b(){
    document.getElementById("botonBlanca").innerHTML = (contadorB = contadorB + 3);
}
function mas4b(){
    document.getElementById("botonBlanca").innerHTML = (contadorB = contadorB + 4);
}
function menos1a(){
    document.getElementById("botonAmarilla").innerHTML = --contadorA;
}
function mas2a(){
    document.getElementById("botonAmarilla").innerHTML = (contadorA = contadorA + 2);
}
function mas3a(){
    document.getElementById("botonAmarilla").innerHTML = (contadorA = contadorA + 3);
}
function mas4a(){
    document.getElementById("botonAmarilla").innerHTML = (contadorA = contadorA + 4);
}
