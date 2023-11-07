document.getElementById("c3").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (email.indexOf("@") === -1) {
        alert("Por favor completa todos los campos!");
    } else {
        alert("Los datos guardados son:\nNombre: " + nombre + "\nCorreo: " + email + "\nMensaje: " + mensaje);

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensaje").value = "";
    }
});