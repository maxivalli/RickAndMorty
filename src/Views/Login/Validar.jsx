export const validar = (input) => {
  let errors = {};

  if (!input.email) {
    errors.email = "Ingrese un email";
  } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(input.email)) {
    errors.email = "Ingrese un email válido";
  } else if (input.email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  }

  if (!input.password) {
    errors.password = "Ingrese una contraseña";
  } else if (!/\d/.test(input.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (input.password.length < 6 || input.password.length > 10) {
    errors.password =
      "La contraseña debe tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
};
