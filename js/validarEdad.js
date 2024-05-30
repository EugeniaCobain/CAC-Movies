export default function esMayor(campo){
    const fechaNac = new Date(campo.value);
    if (!validarEdad(fechaNac)) {
        campo.setCustomValidity("Mayor");
    }
}

function validarEdad(fecha){
    const fechaActual = new Date();
    const fecha18 = new Date(fecha.getFullYear() + 18, fecha.getMonth(), fecha.getDate());

    return fechaActual >= fecha18;
}