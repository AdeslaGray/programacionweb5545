import { useState } from 'react';
import Swal from 'sweetalert2';

export default function TipCalculator() {
  const [amount, setAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tip, setTip] = useState(null);
  const [total, setTotal] = useState(null);

  const handleCalculate = () => {
    const numAmount = parseFloat(amount);
    const numPercent = parseFloat(tipPercent);

    if (isNaN(numAmount) || numAmount <= 0 || isNaN(numPercent)) {
      Swal.fire('Error', 'Ingresa un monto válido y selecciona un porcentaje', 'error');
      return;
    }

    const calculatedTip = (numAmount * numPercent) / 100;
    const calculatedTotal = numAmount + calculatedTip;

    setTip(calculatedTip.toFixed(2));
    setTotal(calculatedTotal.toFixed(2));

    Swal.fire('¡Listo!', 'Propina calculada correctamente', 'success');
  };

  const handleClear = () => {
    setAmount('');
    setTipPercent('');
    setTip(null);
    setTotal(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Calculadora de Propina para Sofía</h2>
      <div className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Monto de la cuenta</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ej: 250"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Porcentaje de propina</label>
          <select
            className="form-select"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
          >
            <option value="">Selecciona</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={handleCalculate}>Calcular</button>
          <button className="btn btn-secondary" onClick={handleClear}>Limpiar</button>
        </div>
        {tip && total && (
          <div className="mt-4 text-center">
            <p><strong>Propina:</strong> L. {tip}</p>
            <p><strong>Total a pagar:</strong> L. {total}</p>
          </div>
        )}
      </div>
    </div>
  );
}