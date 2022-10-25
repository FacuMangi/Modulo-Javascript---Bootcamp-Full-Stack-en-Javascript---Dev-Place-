//Ejercicio 1
function calcularIva(precioBase) {
    let iva = 21
    return precioBase + precioBase * iva / 100;
}

let precio = parseInt(prompt("Introducir precio: "))
const resultado = calcularIva(precio);
window.alert("El precio total es " + resultado);


//Ejercicio 2
function juegos(creditos) {
    switch (creditos) {
        case 1:
            console.log;
            break;
        case 2:
            window.alert("Podes entrar a 2 salas");
            break;
        case 3:
            window.alert("Podes entrar a 3 salas");
            break;
        case 4:
            window.alert("Podes entrar a 4 salas");
            break;
        default:
            window.alert("No podes entrar");
            break;
    }
}
cuantosTikets = parseInt(prompt("Cuantos tikets tenes? "))
const prueba = juegos(cuantosTikets);


//Ejercicio 3
function auto(tipo) {
    if (tipo == 1) {
        window.alert("A la oficina 100");
    } else if (tipo == 2) {
        window.alert("A la oficina 200");
    } else {
        window.alert("A la oficina 300");
    }
}
let var3 = prompt("Introducir tipo de auto: ");
const ejer3 = auto(var3);


//Ejercicio 4
function compra(valor) {
    if (valor < 100) {
        window.alert("No hay descuento");
    } else if (100 <= valor && valor <= 300) {
        window.alert("Tiene 5% de descuento");
    } else if (300 < valor && valor <= 400) {
        window.alert("Tiene 10% de dedscuento");
    } else if (valor > 500) {
        window.alert("Tiene 15% de descuento");
    }
}

let var4 = parseInt(prompt("Ingrese dinero gastado: "));
const ejer4 = compra(var4);


//Ejercicio 5
aux = 0
for (let cont = 1; cont <= 10; cont++) {
    aux += "," + cont;
}
window.alert(aux)


//Ejercicio 6
num = 0
function ejercicio6() {
    for (let conta = 1; conta <= numero; conta++) {
        if (conta % 3 == 2) {
            num += "," + conta;
        }
    }
    window.alert(num);
}

let numero = parseInt(prompt("Ingrese un numero: "));
const papa = ejercicio6(numero);


//ejercicio 7
function ejercicio7(a, b, c, d) {
    x = a + b + c + d
    return(x/4)
}