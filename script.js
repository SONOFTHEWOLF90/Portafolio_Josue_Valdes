document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // VALIDACIONES 
    if (validarNombre() && validarCorreo() && validarTema() && validarMensaje()) {
        
        alert("Formulario enviado correctamente");
    }
});

// Agregar eventos para habilitar el botón
const inputs = document.querySelectorAll('.contacto__campo');
inputs.forEach(input => {
    input.addEventListener('input', verificarCampos);
});

function verificarCampos() {
    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const temaValido = validarTema();
    const mensajeValido = validarMensaje();

    // Habilitar el botón solo si todos los campos son válidos
    document.getElementById("enviar").disabled = !(nombreValido && correoValido && temaValido && mensajeValido);
}

// VALIDAR NOMBRE 
function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    var mensajeNombre = document.getElementById("mensajeNombre");
    mensajeNombre.textContent = '';  

    // Comprobación si está vacío
    if (nombre.trim() === '') {  
        mensajeNombre.textContent = "El nombre no puede estar vacío.";
        mensajeNombre.style.color = "#57d7cc";
        return false;
    }

    // Verificar si tiene más de 50 caracteres
    if (nombre.length > 50) {
        mensajeNombre.textContent = "El campo debe contener menos de 50 caracteres.";
        mensajeNombre.style.color = "#57d7cc";
        return false;
    }

    // Verificar si solo contiene letras y espacios
    var soloLetras = /^[a-zA-Z\s]+$/;  
    if (!soloLetras.test(nombre)) {
        mensajeNombre.textContent = "El nombre solo puede contener letras y espacios.";
        mensajeNombre.style.color = "#57d7cc";
        return false;
    }

    // Si todo está bien
    mensajeNombre.textContent = "";
    mensajeNombre.style.color = "";
    return true;
}

// VALIDAR CORREO 
function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var mensajeCorreo = document.getElementById("mensajeCorreo");
    mensajeCorreo.textContent = ''; 

    // Comprobación si está vacío
    if (correo === '') {
        mensajeCorreo.textContent = "El correo no puede estar vacío.";
        mensajeCorreo.style.color = "#57d7cc";
        return false;
    }

    // Comprobación del "@"
    if (!/@/.test(correo)) {
        mensajeCorreo.textContent = "El correo debe tener una '@'.";
        mensajeCorreo.style.color = "#57d7cc";
        return false;
    }

    // Comprobación del dominio
    var partes = correo.split('@');
    if (partes.length !== 2 || partes[1] === '') {
        mensajeCorreo.textContent = "Coloque el dominio después del '@'.";
        mensajeCorreo.style.color = "#57d7cc";
        return false;
    }

    // Comprobación del "."
    if (!/\.[a-z]{2,}$/i.test(partes[1])) {
        mensajeCorreo.textContent = "El dominio debe contener un punto seguido de al menos dos letras.";
        mensajeCorreo.style.color = "#57d7cc";
        return false;
    }

    // Todo Ok 
    mensajeCorreo.textContent = "";
    mensajeCorreo.style.color = "";
    return true;
}

// VALIDACION TEMA 
function validarTema() {
    var tema = document.getElementById("tema").value;
    var mensajeTema = document.getElementById("mensajeTema");
    mensajeTema.textContent = '';  

    // Comprobar si el campo está vacío
    if (tema.trim() === '') {
        mensajeTema.textContent = "El asunto no puede estar vacío.";
        mensajeTema.style.color = "#57d7cc";
        return false;
    }

    // Comprobar si tiene más de 50 caracteres
    if (tema.length > 50) {
        mensajeTema.textContent = "El asunto debe contener menos de 50 caracteres.";
        mensajeTema.style.color = "#57d7cc";
        return false;
    }

    // Todo Ok 
    mensajeTema.textContent = "";
    mensajeTema.style.color = "";
    return true;
}

// VALIDACION MENSAJE 
function validarMensaje() {
    var mensaje = document.getElementById("mensaje").value;
    var mensajeMensaje = document.getElementById("mensajeMensaje");
    mensajeMensaje.textContent = ''; 

    // Comprobar si el campo está vacío
    if (mensaje.trim() === '') {
        mensajeMensaje.textContent = "El mensaje no puede estar vacío.";
        mensajeMensaje.style.color = "#57d7cc";
        return false;
    }

    // Comprobar si tiene más de 300 caracteres
    if (mensaje.length > 300) {
        mensajeMensaje.textContent = "El mensaje debe contener menos de 300 caracteres.";
        mensajeMensaje.style.color = "#57d7cc";
        return false;
    }

    // Todo Ok
    mensajeMensaje.textContent = "";
    mensajeMensaje.style.color = "";
    return true;
}
  
// reproducir sonido al enviar 

function sonidoEnviar(){
    document.querySelector("#sonido_enviar").play();
}

document.querySelector(".contacto__boton").onclick = sonidoEnviar;