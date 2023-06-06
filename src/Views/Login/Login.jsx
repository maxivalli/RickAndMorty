import style from '../Login/Login.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validar } from './Validar';

function UserData() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [access, setAccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const EMAIL = "maxi@mail.com";
  const PASSWORD = "maxi1368";

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));

    setErrors(validar({
      ...inputs,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    const newErrors = validar(inputs);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      login(inputs);
    }
  }

  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
    } else {
      setShowAlert(true);
    }
  }

  useEffect(() => {
    if (access) {
      navigate('/home');
    }
  }, [access, navigate]);

  return (
    <div className={style.login}>
      <h1>Rick and Morty</h1>
      <div className={style.container}>
        <span>Inicia sesión</span>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder="Ingresa tu email"
            value={inputs.email}
            name='email'
            onChange={handleChange}
          />
          <h5 className={style.mail}>{errors.email}</h5>
          <br /><br />
          <input
            type='password'
            placeholder="Ingresa tu contraseña"
            value={inputs.password}
            name='password'
            onChange={handleChange}
          />
          <h5 className={style.password}>{errors.password}</h5>
          <br /><br />

          {Object.keys(errors).length === 0 && (
            <button type='submit'>Ingresa</button>
          )}
          {showAlert && <h5 className={style.alert}>Credenciales incorrectas. Inténtalo nuevamente.</h5>}
        </form>
      </div>
    </div>
  );
}

export default UserData;
