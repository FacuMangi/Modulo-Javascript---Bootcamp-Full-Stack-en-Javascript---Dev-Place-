const prompt = require("prompt-sync")({ sigint: true});

let array = [];
let intento = 0;
for (let cont = 1; cont <=10; cont++){
    let numero = parseInt(prompt("INTRODUCIR NUMERO: "))
    let agregar = (numero) => array.push(numero);
    agregar(numero);
    intento += cont;
}

console.log("Lista: " + array);
console.log("Maximo: " + Math.max(...array));
console.log("Minimo: " + Math.min(...array));

arrayPar = []
array.forEach(element => {
    if(element % 2 == 0) {
        arrayPar.push(element);
    }
});
console.log("Pares: " + arrayPar)

arrayImpar = []
array.forEach(element => {
    if(element % 2 !== 0) {
        arrayImpar.push(element);
    }
});
console.log("Impares: " + arrayImpar)

array.sort(function(a, b){return a-b});
console.log("Ascendente: " + array);
array.sort(function(a, b){return b-a});
console.log("Descendente: " + array);