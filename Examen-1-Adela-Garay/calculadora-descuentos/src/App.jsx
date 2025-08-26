import { useState } from "react";
import Swal from "sweetalert2";

export default function App() {
  const [productos, setProductos] = useState(["", "", "", "", ""]);
  const [subtotal, setSubtotal] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularDescuento = (subtotal) => {
    if (subtotal >= 13000) return 40;
    if (subtotal >= 9000) return 30;
    if (subtotal >= 5000) return 20;
    if (subtotal >= 1000) return 10;
    return 0;
  };

  const handleChange = (index, value) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index] = value;
    setProductos(nuevosProductos);
  };

  const handleCalcular = () => {
    // Validación
    if (productos.some((p) => p === "" || isNaN(p))) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos deben tener valores numéricos.",
      });
      return;
    }

    const numeros = productos.map((p) => parseFloat(p));
    const nuevoSubtotal = numeros.reduce((a, b) => a + b, 0);
    const porcDesc = calcularDescuento(nuevoSubtotal);
    const descuentoAplicado = (nuevoSubtotal * porcDesc) / 100;
    const totalPagar = nuevoSubtotal - descuentoAplicado;

    setSubtotal(nuevoSubtotal);
    setDescuento(porcDesc);
    setTotal(totalPagar);
  };

  const handleLimpiar = () => {
    setProductos(["", "", "", "", ""]);
    setSubtotal(0);
    setDescuento(0);
    setTotal(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Calculadora de Descuentos</h1>

        {/* Campos de entrada */}
        {productos.map((valor, i) => (
          <input
            key={i}
            type="text"
            value={valor}
            onChange={(e) => handleChange(i, e.target.value)}
            placeholder={`Producto ${i + 1}`}
            className="w-full border p-2 rounded mb-2"
          />
        ))}

        {/* Botones */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleCalcular}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Calcular
          </button>
          <button
            onClick={handleLimpiar}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Limpiar
          </button>
        </div>

        {/* Resultados */}
        <div className="mt-6">
          <p><strong>Subtotal:</strong> L {subtotal.toFixed(2)}</p>
          <p><strong>Descuento {descuento}%:</strong> L {(subtotal * descuento / 100).toFixed(2)}</p>
          <p><strong>Total a Pagar:</strong> L {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
