class Persona {
  constructor(dni, nombre, apellido, telefono) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

class UI {
  addPersona(user) {
    const userList = document.getElementById("user-list");
    const element = document.createElement("div");
    element.innerHTML = 
`<div class="card text-center mb-4" id="element_${user.dni}">
      <div class="card-body">
         <strong>dni</strong>: ${user.dni}
         <strong>Nombre</strong>: ${user.nombre}
         <strong>Apellido</strong>: ${user.apellido}
         <strong>Telefono</strong>: ${user.telefono}
         <a href="#" data-id="element_${user.dni}" id="eliminar_${user.dni}"  class="btn btn-danger" name="delete">Eliminar</a>
      </div>
  </div>`;
    userList.appendChild(element);
  }

  restForm() {
    document.getElementById("user-form").reset();
  }
}

document
  .getElementById("user-form")
  .addEventListener("submit", function (e) {
    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;

    const user = new Persona(dni, nombre, apellido, telefono);

    const ui = new UI();
    ui.addPersona(user);
    ui.restForm();

    document
      .getElementById("eliminar_" + dni)
      .addEventListener("click", function (e) {
        console.log(e);
        const f = this.getAttribute("data-id");
        document.getElementById(f).remove();
      });

    e.preventDefault();
  });

document.getElementById("user-list").addEventListener("click", function (e) {
  const ui = new UI();
});

