class Persona {
  dni;
  nombre;
  apellido;
  telefono;

  constructor(dni, nombre, apellido, telefono) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

class UI {
  addPersona(user) {
    const userList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
  <div class="card text-center mb-4">
      <div class="card-body">
         <strong>dni</strong>: ${user.dni}
         <strong>Nombre</strong>: ${user.nombre}
         <strong>Apellido</strong>: ${user.apellido}
         <strong>Telefono</strong>: ${user.telefono}
         <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
      </div>
  </div>
  `;
    userList.appendChild(element);
  }

  restForm() {
    document.getElementById("product-form").reset();
  }

  deletePersona(element) {
    if (element.dni === "delete") {
      element.parentElement.parentElement.parentElement.remove();
    }
  }
}

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;

    const user = new Persona(dni, nombre, apellido, telefono);

    const ui = new UI();
    ui.addPersona(user);
    ui.restForm();

    e.preventDefault();
  });

document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deletePersona(e.target);
});
