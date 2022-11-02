// 1 - Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
//  Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.

class Banco {
    CuentaCorriente;
    CajaAhorro;
    SeguroDeVida;
    SeguroHogar;

    constructor(CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar) {
        this.CuentaCorriente = CuentaCorriente
        this.CajaAhorro = CajaAhorro
        this.SeguroDeVida = SeguroDeVida
        this.SeguroHogar = SeguroHogar
    }

    assingn() {
        return new Banco(this.CuentaCorriente, this.CajaAhorro, this.SeguroDeVida, this.SeguroDeVida)
    }
}

let cuenta = new Banco(1,2,3,4);
console.log(cuenta);

let copia = cuenta.assingn();
console.log(copia);


// 2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. 
//     La oficina tendrá un nombre y una cantidad fija de empleados. 
//     Si intento crear una segunda oficina me debería devolver la primera instancia creada. 
//     Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.

let oficina = null;

class Oficina {
    nombre;
    empleados;

    // typeof Oficina.instance === "object"
    constructor(nombre, empleados) {
        this.nombre = nombre;
        this.empleados = empleados;        
        
        if(!oficina) {
            oficina = this;
        }
        else
            return oficina;

        console.log("Oficina creada")
    }

    getDatosOficina() {
        return this.nombre + " " + this.empleados;
    }
}

function init_Oficina() {
    var oficina1 = new Oficina("MacDonado", 20);
    var oficina2 = new Oficina("BerguerNig", 25);
    console.log(oficina1.getDatosOficina());
    console.log(oficina2.getDatosOficina());
    console.log(oficina1 instanceof Oficina);
    console.log(oficina2 instanceof Oficina);
    console.log(oficina1===oficina2);
}

init_Oficina()


// 3 - Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. 
//     Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. 
//     Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  
//     Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza. 
//     Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder. 
//     ¿Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza.

class Pizzeria {
    constructor() {
        this.ingredientes = ['Tomate', 'Queso', 'Salami', 'Rucula', 'Cebolla', 'Jamon', 'Ananá'];
        this.masa = ['Masa fina', 'Masa gruesa']
        console.log("Pizeria creada");
    }

    Agregar () {
        for (var all in this.ingredientes) {
            let pizza = new Pizza()
            pizza.agregarIngrediente(this.ingredientes[all]);
            pizza.sacarDelHorno()
        }
    }
}

class Pizza {

    constructor() {
    }

    agregarIngrediente() {
    }
}

class PizzaConcreta extends Pizza {
    constructor() {
        super()
        console.log("Creada clase de PizzaConcreta");
    }
    agregarIngrediente (rawmaterial) {
        console.log("PizzaConcreta agregarIngrediente()");
        var ingrediente = rawmaterial
        this.pizzaCocinada = new PizzaCocinada(material)
    }

    sacarDelHorno() {
        console.log(JSON.stringify(this.pizzaCocinada))
        return this.pizzaCocinada
    }
}

class PizzaCocinada {
    constructor(ingrediente) {
        console.log("Creada clase de PizzaCocinada");
        this.data = ingrediente
    }
}

function init_Pizzeria() {
    let pizzeria = new Pizzeria()
        pizzeria.Agregar()
}

// 4 - Supongamos que tengo 3 manzanas pero se diferencian cada una de su color (la primera es amarilla, la segunda roja y la tercera verde) y de su fecha de vencimiento (la primera vence en 5 dias, la segunda en 7 dias y la tercera en 10 dias). Para no instanciar cada sub clase de manzanas de manera separada crear la clase AppleFactory y dependiendo de los parámetros mandados, va a hacer una instancia de objeto. Aplicar el patrón de diseño Factory Method.

class Color{
    constructor(color)
}

class Vencimiento{
    constructor(vencimiento)
}

class AppleFactory{
    create = (color,vencimiento)=>{
        if (!vencimiento){
            return "Falta vencimiento"
        }
    }
}

