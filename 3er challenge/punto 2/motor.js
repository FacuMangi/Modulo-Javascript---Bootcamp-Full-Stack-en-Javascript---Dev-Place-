class Motor {
    estado;

    constructor() {
        this.estado = "apagado";
    }

    encender() {
        this.estado = "encendido";
    }

    apagar() {
        this.estado = "apagado";
    }
}