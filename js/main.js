// Array para almacenar las suscripciones
var suscripciones = [];

// Manejo del formulario de suscripción
document.getElementById("suscripcionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Agregar la suscripción al array
    suscripciones.push({ nombre: nombre, email: email });

      // Actualizar la lista de suscripciones en la página
      actualizarListaSuscripciones();

      // Restablecer el formulario
      document.getElementById("suscripcionForm").reset();
  });

    // Función para actualizar la lista de suscripciones en la página
    function actualizarListaSuscripciones() {
        var listaSuscripciones = document.getElementById("suscripcionesList");
        listaSuscripciones.innerHTML = "";

        suscripciones.forEach(function(suscripcion) {
            var li = document.createElement("li");
            li.textContent = "Nombre: " + suscripcion.nombre + ", Correo Electrónico: " + suscripcion.email;
            listaSuscripciones.appendChild(li);
        });
    }