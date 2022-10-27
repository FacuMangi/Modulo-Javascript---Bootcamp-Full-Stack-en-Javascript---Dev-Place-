class Nif {
    dni;
    letra;

    //Nif no valido
    constructor() {
        this.dni = 0
        this.letra = ""
    }

    //Calcular letra de Nif
    setLetra(dni) {
        this.dni = dni;
        this.letra = calcularLetra();
    }

    calcularLetra() {
        letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        return letras[dni % 23];
    }

    //accedentes y mutadores
    getDni() {
        return this.dni;
    }

    setDni(dni) {
        return this.dni = dni;
    }

    leer() {
        return this.dni + "-" + this.letra;
    }
}

let nif1 = new (Nif)
console.log(nif1)
nif1.setDni(41669302)
nif1.setLetra(41669302)
console.log(nif1)