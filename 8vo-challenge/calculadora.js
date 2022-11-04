let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir = (n1, n2) => n1 / n2;

function hacerOperacion(n1, n2, operacion) {
    let calculadora = function(n1, n2, callback) {
        return callback(n1, n2);
    }
    switch(operacion) {
        case "sumar" :
            console.log(calculadora(n1, n2, suma))
            break;
        case "restar" :
            console.log(calculadora(n1, n2, resta))
            break;
        case "multiplicar" :
            console.log(calculadora(n1, n2, multiplicar))
            break;
        case "dividir" :
            console.log(calculadora(n1, n2, dividir))
            break;
    }
}

hacerOperacion(2, 2, "multiplicar");