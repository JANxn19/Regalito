// Definir la contraseña correcta
var contrasenaCorrecta = "14DEMAYO2023";

function verificarContrasena() {
    var contrasenaIngresada = document.getElementById("contrasena").value;

    if (contrasenaIngresada === contrasenaCorrecta) {
        // Redirige a la página de contenido secreto al ingresar la contraseña correcta
        window.location.href = "contenido_secreto/contenido_secreto.html";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
        document.getElementById("contrasena").value = ""; // Limpia el campo de contraseña
    }
}
