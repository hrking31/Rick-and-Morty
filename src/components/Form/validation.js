const validation = (userData) => {
  let errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Hay un error en tu Mail";
  }

  if (!userData.email) {
    errors.email = "Este campo no puede estar Vacío";
  }
  if (userData.email.length > 35) {
    errors.email = "El mail no puede superar los 35 caracteres";
  }

  if (!userData.password.match(/\d/)) {
    errors.password = "Password debe tener almenos un Número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La password debe tener entre 6 y 10 Caracteres";
  }
  return errors;
};

export default validation;
