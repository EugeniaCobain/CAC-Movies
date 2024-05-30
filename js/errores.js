export const tiposError = [
  "valueMissing",
  "typeMismatch",
  "tooShort",
  "customError"
]
  
export const mensajesError = {
  nombre: {
    valueMissing: "El campo 'Nombre' no puede quedar vacío.",
    patternMismatch: "Por favor, ingresá un nombre válido.",
    tooShort: "Este campo debe tener al menos 3 caracteres",
  },

  apellido: {
    valueMissing: "El campo 'Apellido' no puede quedar vacío.",
    patternMismatch: "Por favor, ingresá un apellido válido.",
    tooShort: "Este campo debe tener al menos 2 caracteres",
  },

  email: {
    valueMissing: "El campo 'E-mail' no puede quedar vacío.",
    typeMismatch: "Por favor, ingresá un email válido.",
    tooShort: "Este campo debe tener al menos 3 caracteres",
  },

  password: {
    valueMissing: "El campo 'Contraseña' no puede quedar vacío.",
    patternMismatch: "Por favor, ingresá una contraseña válida.",
    tooShort: "Este campo debe tener entre 8 y 12 caracteres",
    tooLong: "Este campo debe menos de 12 caracteres",
  },
 
  fechaNac: {
    valueMissing: "El campo 'Fecha de nacimiento' no puede quedar vacío.",
    customError: "Debés ser mayor de 18 años para registrarte en nuestro sitio.",
  },

  terminos: {
    valueMissing: "Tenés que aceptar nuestros términos y condiciones para continuar.",
  },
};
