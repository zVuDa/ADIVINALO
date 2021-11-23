"use strict";
const generarAleatorio = (min,max) => {return Math.floor(Math.random() * (max - min) + min)}

let numUsuario = document.querySelector("#aleatorio");
let numAleatorio = generarAleatorio(1,100);
let msgAleatorio = document.querySelector("#msg_aleatorio");
let msgPista = document.querySelector("#msg_pista");
let btnAleatorio = document.querySelector("#b_aleatorio");
let Tirada = 0;
let numTirada = document.querySelector("#msg_numtirada");
let msgTirada = document.querySelector("#msg_tirada");
let intentos = []

console.log(numAleatorio)
console.log(numUsuario.value)
// if(numUsuario.default){numUsuario.style.cssText = `color:black`;}
if(numUsuario.value == numAleatorio){
    msgAleatorio.innerHTML = "FELICIDADES!! HAS ADIVINADO EL NÚMERO CORRECTO" // "==" PARA COMPARAR
}else{msgAleatorio.innerHTML = "QUÉ LÁSTIMA! SIGUE INTENTÁNDOLO"};
numUsuario.default = msgAleatorio.innerHTML = " ";

//Pide al ordenador que te genere un número aleatorio entre 0 y 10 y lo muestre en pantalla
btnAleatorio.addEventListener("click", ()=>{//CALLBACK, FUNCIÓN DENTRO DE FUNCIÓN
    intentos.push(numUsuario.value); msgPista.innerHTML = `TÚS NUMEROS HAN SIDO:${intentos}`
    // console.log(numUsuario)
    Tirada++, numTirada.innerHTML = `Tirada ${Tirada} de 10`;
    if(numUsuario.value == numAleatorio){msgAleatorio.className += `correcto`;
        msgAleatorio.innerHTML = "FELICIDADES!! HAS ADIVINADO EL NÚMERO CORRECTO" // "==" PARA COMPARAR
    }else if(numUsuario.value > numAleatorio){
        msgAleatorio.innerHTML = "TE HAS PASADO!!";
    }else{msgAleatorio.innerHTML = "NO TE QUEDES CORTO!!"
    }
});

//SI LLEGA A 10 TIRADAS SE PARA
btnAleatorio.addEventListener("click", ()=>{
if(Tirada == 10){msgTirada.innerHTML = "HAS ALCANZADO EL NÚMERO MÁXIMO DE INTENTOS. VUELVE A PULSAR PARA REINICIAR LA PÁGINA."}
else{msgTirada.innerHTML = "AÚN TE QUEDAN INTENTOS, NO TE DESMORALICES"}
if(Tirada == 11){location.reload(true)}})