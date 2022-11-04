let jugador1 = [1, 4, 2, 5];
let jugador2 = [1, 4, 2, 9];



function juego() {

    let arbitro1 = parseInt(prompt("Primer numero del arbitro: "));
    let arbitro2 = parseInt(prompt("Segundo numero del arbitro: "));
    
    aux = 0
    array.forEach(function (elemento) {
        if ((elemento > arbitro1 && elemento < arbitro2) || (elemento > arbitro2 && elemento < arbitro1)) {
            aux += 1;
        }
    })
    console.log(aux);
}


