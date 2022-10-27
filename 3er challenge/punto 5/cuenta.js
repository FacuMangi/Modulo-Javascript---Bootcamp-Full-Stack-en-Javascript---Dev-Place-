class Cuenta {
    titular;
    cantidad;
    
    constructor(titular){
        this.titular = titular;
        this.cantidad = 0;
    }

    setTitular(titular){
        if (isNaN(titular)) {
            return this.nombre = nombre;
            }
    }

    setCantidad(cantidad){
        if (!isNaN(cantidad)){
            return this.cantidad + cantidad;
        }
    }
}

let cuenta1 = new (Cuenta);
console.log(cuenta1);

cuenta1.setCantidad(10);
console.log(cuenta1);