import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { nombre, dni, direccion, email } = form;
    if (!nombre || !dni || !direccion || !email) {
      toast.error("Todos los campos son obligatorios");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Formato de email inválido");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAdd(form);
      toast.success("Empleado agregado correctamente");
      setForm({ nombre: "", dni: "", direccion: "", email: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-purple-700">➕ Agregar empleado</h2>
      {["nombre", "dni", "direccion", "email"].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      ))}
      <button type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90 transition">
        Guardar
      </button>
    </form>
  );
}