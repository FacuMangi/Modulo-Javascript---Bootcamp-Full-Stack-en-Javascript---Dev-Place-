import { agenda } from "./Lautaro/functions.mjs";

class Contacto {
    constructor(dni, nombre, apellido, telefono) {
      this.dni = dni;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
    }
  }

let datos = [];

const agregarContacto = (dni, nombre, apellido, telefono) => {
    let yaExiste = datos.find((element) => element.dni === dni);
    if (!yaExiste) {
        let contacto = new Contacto(dni, nombre, apellido, telefono);
        agenda.push(contacto);
    } else {
        alert("Ya existe un contacto con ese DNI")
    }
};

const eliminarContacto = (dni) => {
    if (datos.length === 0) {
        alert("No hay datos para eliminar")
    } else {
        let datoAEliminar = datos.find( element => element.dni === dni );
        let indiceAEliminar = datos.indexOf(datoAEliminar);
        datos.splice(indiceAEliminar, 1);
    }
}

const mostrarContacto = (dni) => {
    if (datos.length === 0) {
        alert("No hay datos para eliminar")
    } else {
        let indiceAVer = datos.indexOf(datos.find((element) => element.dni === dni));
        encontrarContacto(datos[indiceAVer]);
    }
}

function encontrarContacto(contacto) {
    
}