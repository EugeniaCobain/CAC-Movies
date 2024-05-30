//Importación de archivos JS
import esMayor from "./validarEdad.js";
import {tiposError, mensajesError} from "./errores.js";

//Declaro constantes
//Selecciono todos los elementos de los formularios que tengan el atributo "required"
const camposRequeridos = document.querySelectorAll("[required]");

/* VERIFICACIÓN DE LOS CAMPOS DE LOS FORMULARIOS DE REGISTRO E INICIO DE SESIÓN */
function verificarCampo(campo){
    let mensajeError = "";
    campo.setCustomValidity("");

    /* Verificar si es mayor de edad */
    if(campo.name == "fechaNac" && campo.value != ""){
        esMayor(campo);
    }

    /* Mensajes de error */
    tiposError.forEach(error =>{
        if(campo.validity[error]){
            mensajeError = mensajesError[campo.name][error];
            console.log(mensajeError);
        }
    })
    const mensaje = campo.parentNode.querySelector(".mensaje_error");
    const validarCheckBox = campo.checkValidity();
    if(!validarCheckBox){
        mensaje.textContent = mensajeError;
        mensaje.style.display = "inline-block"; 
    } else {
        mensaje.textContent = "";
        mensaje.style.display = "none";
    }
};

//Recorro los campos de los formularios y les agrego el evento "blur" para que cuando les saque el foco se ejecute la función verificarCampo y el evento "invalid" para que, cuando el campo contenga errores, prevenga el lanzamiento de carteles para que se muestren los que customicé
camposRequeridos.forEach((campo)=> { 
    campo.addEventListener("blur", ()=> verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

//Envío y almacenamiento en el LocalStorage de los formularios
document.addEventListener("DOMContentLoaded", () => {
    const formularios = document.querySelectorAll("[data-form]");
    formularios.forEach((formulario) => {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = e.target;  
            //Formulario de Registro
            if (form.dataset.form === "registro") {
                const listaRespuestas = {
                    nombre: form.elements["nombre"].value,
                    apellido: form.elements["apellido"].value,
                    email: form.elements["email"].value,
                    password: form.elements["password"].value,
                    fechaNac: form.elements["fechaNac"].value
                };
                localStorage.setItem("registro", JSON.stringify(listaRespuestas));
                // Redirigir a la página de inicio de sesión después del registro
                alert("¡Registro exitoso! Ahora solo debés iniciar sesión")
                window.location.href = "./sesion.html";
            //Formulario de inicio de sesión    
            } else if (form.dataset.form === "inicio-sesion") {
                const listaRespuestas = {
                    email: form.elements["email"].value,
                    password: form.elements["password"].value
                };
                localStorage.setItem("sesion", JSON.stringify(listaRespuestas));
                // Redirigir al index después de iniciar sesión
                alert("Sesión inicada. Serás dirigido a la página principal desde donde podrás acceder a todos nuestros servicios")
                window.location.href = "../index.html";
            }
        });
    });
});



















