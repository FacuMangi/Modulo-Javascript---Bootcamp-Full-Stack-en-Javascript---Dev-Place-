//Ejercicio 1
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
console.log(meses);


//Ejercicio 2
function ejercicio2(a) {
    esPar = (a % 2 == 0);
    if (esPar === true){
        console.log("Es par")
        //window.alert("Es par")
    } else {
        console.log("No es par")
        //window.alert("No es par")
    }
}

ejercicio2(4)
ejercicio2(3)


//Ejercicio 3
function ejercicio3(string) {
    caso1 = string.toUpperCase();
    caso2 = string.toLowerCase();
    
    if (string == caso1){
        console.log("Solo mayusculas");
    } else if (string == caso2) {
        console.log("Solo minusculas");
    } else {
        console.log("Mezcla");
    }
}

ejercicio3("HOLA")
ejercicio3("hola")
ejercicio3("Hola")


//Ejercicio 4
function ejercicio4(num){
    for (let i = num - 1; i >= 1; i--)
    {
        num = num * i
        console.log(num)
    }
}

ejercicio4(5)

