class Persona {
    nombre;
    apellido;
    id;
    estadoCivil;

    constructor(nombre, apellido, id, estadoCivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
        this.estadoCivil = estadoCivil;
    }

    cambiarEstadoCivil(nuevoEstadoCivil) {
        this.estadoCivil = nuevoEstadoCivil;
    }
    
    info() {
        return console.log("Nombre: " + this.nombre + ", Apellido: " + this.apellido  + ", Id: " + this.id  + ", Estado civil: " + this.estadoCivil);
    }
}

class Empleado extends Persona {
    añoIncorporado;
    despacho;

    constructor(nombre, apellido, id, estadoCivil, añoIncorporado, despacho) {
        super(nombre, apellido, id, estadoCivil,);
        this.añoIncorporado = añoIncorporado;
        this.despacho = despacho;
    }

    reasignar(nuevoDespacho) {
        this.despacho = nuevoDespacho;
    }

    reasignarDespacho(nuevoDespacho) {
        this.despacho = nuevoDespacho;
    }
    
    infoEmpleado() {
        return console.log("Nombre: " + this.nombre + ", Apellido: " + this.apellido  + ", Id: " + this.id  + ", Estado civil: " + this.estadoCivil + ", Año de incorporacion: " + this.añoIncorporado + ", Despacho: " + this.despacho);
    }
}

class Estudiante extends Persona {
    curso;

    constructor(nombre, apellido, id, estadoCivil, curso) {
        super(nombre, apellido, id, estadoCivil);
        this.curso = curso;
    }

    reasignarCurso(nuevoCurso) {
        this.curso = nuevoCurso;
    }

    infoEstudiante() {
        return console.log("Nombre: " + this.nombre + ", Apellido: " + this.apellido  + ", Id: " + this.id  + ", Estado civil: " + this.estadoCivil + ", Curso: " + this.curso);
    }
}

class Profesor extends Empleado {
    departamento;

    constructor(nombre, apellido, id, estadoCivil, añoIncorporado, despacho, departamento) {
        super(nombre, apellido, id, estadoCivil, añoIncorporado, despacho);
        this.departamento = departamento;
    }

    cambioDepartamento(nuevoDepartamento){
        this.departamento = nuevoDepartamento;
    }

    infoProfesor() {
        return console.log("Nombre: " + this.nombre + ", Apellido: " + this.apellido  + ", Id: " + this.id  + ", Estado civil: " + this.estadoCivil + ", Año de incorporacion: " + this.añoIncorporado + ", Despacho: " + this.despacho + ", Departamento: " + this.departamento);
    }
}

class PersonalServicio extends Empleado {
    seccion;

    constructor(nombre, apellido, id, estadoCivil, añoIncorporado, despacho, seccion) {
        super(nombre, apellido, id, estadoCivil, añoIncorporado, despacho);
        this.seccion = seccion
    }

    cambioDeSeccion(nuevaSeccion) {
        this.seccion = nuevaSeccion;
    }

    infoServicio() {
        return console.log("Nombre: " + this.nombre + ", Apellido: " + this.apellido  + ", Id: " + this.id  + ", Estado civil: " + this.estadoCivil + ", Año de incorporacion: " + this.añoIncorporado + ", Despacho: " + this.despacho + ", Seccion: " + this.seccion);
    }
}



let persona = new Persona("Ernesto", "Esteban", 47, "Soltero");
let empleado = new Empleado("Ernesto", "Esteban", 47, "Soltero", 2009, 1);
let estudiante = new Estudiante("Ernesto", "Esteban", 47, "Soltero", "JavaScript");
let profesor = new Profesor("Ernesto", "Esteban", 47, "Soltero", 2009, 2, "CSS");
let servicio = new PersonalServicio("Ernesto", "Esteban", 47, "Soltero", 2009, 3, "Cocina");

persona.info();
persona.cambiarEstadoCivil("Casado");
persona.info();
empleado.infoEmpleado();
estudiante.infoEstudiante();
estudiante.reasignarCurso("CSS");
estudiante.infoEstudiante();
profesor.infoProfesor();
servicio.infoServicio();