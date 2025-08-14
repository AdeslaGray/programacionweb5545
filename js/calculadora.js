function calcularArea() {
  const base = document.getElementById('base').value.trim();
  const altura = document.getElementById('altura').value.trim();

  if (!base || !altura) {
    Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
    return;
  }

  const baseNum = parseFloat(base);
  const alturaNum = parseFloat(altura);

  if (isNaN(baseNum) || isNaN(alturaNum)) {
    Swal.fire('Error', 'Los valores deben ser números válidos', 'error');
    return;
  }

  if (baseNum <= 0 || alturaNum <= 0) {
    Swal.fire('Error', 'Los valores deben ser positivos', 'error');
    return;
  }

  const area = baseNum * alturaNum;
  document.getElementById('resultado').value = area;
  Swal.fire('Éxito', `El área es ${area}`, 'success');
}

function limpiarFormulario() {
  document.getElementById('base').value = '';
  document.getElementById('altura').value = '';
  document.getElementById('resultado').value = '';
}