class Coche {
    motor;
    puerta1;
    puerta2;
    rueda1;
    rueda2;
    rueda3;
    rueda4;

    constructor(motor, puerta1, puerta2, rueda1, rueda2, rueda3, rueda4) {
        this.motor = "apagado";
        this.puerta1 = "cerrada";
        this.puerta2 = "cerrada";
        this.rueda1 = "inflada";
        this.rueda2 = "inflada";
        this.rueda3 = "inflada";
        this.rueda4 = "inflada";
    }

    encender() {
        this.motor = "encendido";
    }

    apagar() {
        this.motor = "apagado";
    }

    abrirPuerta() {
        this.puerta1 = "abierta";
        this.puerta2 = "abierta";
    }

    abrirVentana() {
        this.puerta1 = "ventana abierta";
        this.puerta2 = "ventana abierta";
    }
    
    cerrarPuerta() {
        this.puerta1 = "cerrada";
        this.puerta2 = "cerrada";
    }

    cerrarVentana() {
        this.puerta1 = "ventana cerrada";
        this.puerta2 = "ventana cerrada";
    }

    inflar() {
        this.rueda1 = "inflada";
        this.rueda2 = "inflada";
        this.rueda3 = "inflada";
        this.rueda4 = "inflada";
    }

    desinflar() {
        this.rueda1 = "desinflada";
        this.rueda2 = "desinflada";
        this.rueda3 = "desinflada";
        this.rueda4 = "desinflada";
    }
}

var auto = new (Coche)