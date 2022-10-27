class Puerta {
    estado;

    constructor() {
        this.estado = "cerrada";
    }

    abrir() {
        this.estado = "abierta";
    }

    cerrar() {
        this.estado = "cerrada";
    }
}