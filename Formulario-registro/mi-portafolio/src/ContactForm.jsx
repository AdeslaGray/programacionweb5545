import React, { useState } from 'react';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!email.trim()) {
      nuevosErrores.email = 'El correo es obligatorio.';
    } else if (!validarEmail(email)) {
      nuevosErrores.email = 'El formato del correo no es válido.';
    }
    if (!mensaje.trim()) nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setExito(true);
      setNombre('');
      setEmail('');
      setMensaje('');
      setErrores({});
      setTimeout(() => setExito(false), 5000); // Oculta el mensaje después de 5 segundos
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contáctame</h2>

      {exito && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          ¡Gracias por tu mensaje!
        </div>
      )}

      <form onSubmit={manejarEnvio} noValidate>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={`w-full px-3 py-2 border rounded ${
              errores.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded ${
              errores.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows="5"
            className={`w-full px-3 py-2 border rounded ${
              errores.mensaje ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errores.mensaje && <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;