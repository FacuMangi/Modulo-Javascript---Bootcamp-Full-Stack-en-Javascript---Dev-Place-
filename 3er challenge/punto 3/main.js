class Persona {
    nombre;
    edad;
    DNI;

    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.DNI = 0;
    }

    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getDNI() {
        return this.DNI;
    }

    setNombre(nombre) {
        if (isNaN(nombre)) {
        return this.nombre = nombre;
        }
    }
    setEdad(edad) {
        if (!isNaN(edad)) {
        return this.edad = edad;
        }
    }

    setDni(DNI) {
        if (!isNaN(DNI)) {
        return this.DNI = DNI;
        }
    }

    mostrar() {
        return console.log("persona 1:", this.nombre + ", " + this.edad + ", " + this.DNI);
    }

    esMayorDeEdad() {
        return this.edad > 18;
    }
}


let persona1 = new (Persona)
console.log(persona1)
persona1.setDni(40300500)
persona1.setNombre("Tito Mendez")
persona1.setEdad(10)
console.log(persona1)
persona1.mostrar()