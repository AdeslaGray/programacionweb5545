import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const RegisterForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  // Validaciones en tiempo real
  useEffect(() => {
    const nuevosErrores = {};

    if (!nombre.trim() || nombre.length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      nuevosErrores.email = 'Correo electrónico inválido.';
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password.trim() || !passwordRegex.test(password)) {
      nuevosErrores.password =
        'La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.';
    }

    setErrores(nuevosErrores);
  }, [nombre, email, password]);

  const esFormularioValido = Object.keys(errores).length === 0;

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (esFormularioValido) {
      setExito(true);
      setTimeout(() => setExito(false), 5000);
      setNombre('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Registro de Usuario</h2>

      {exito && (
        <Alert variant="success">
          ¡Registro exitoso! ¡Bienvenido, <strong>{nombre}</strong>!
        </Alert>
      )}

      <form onSubmit={manejarEnvio} noValidate>
        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input
            type="text"
            className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className={`form-control ${errores.email ? 'is-invalid' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errores.email && <div className="invalid-feedback">{errores.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className={`form-control ${errores.password ? 'is-invalid' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errores.password && <div className="invalid-feedback">{errores.password}</div>}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!esFormularioValido}
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;