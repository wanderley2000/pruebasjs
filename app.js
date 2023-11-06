document.getElementById("c3").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (email.indexOf("@") === -1) {
        alert("Por favor ingresa un correo válido. Falta el '@'.");
    } else {
        alert("Los datos guardados son:\nNombre: " + nombre + "\nCorreo: " + email + "\nMensaje: " + mensaje);

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensaje").value = "";
    }
});