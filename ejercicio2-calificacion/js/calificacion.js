function calcular() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  // Validaciones
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    return Swal.fire("Error", "Todos los campos deben estar llenos y ser números", "error");
  }

  if (nota1 < 0 || nota1 > 30 || nota2 < 0 || nota2 > 30 || nota3 < 0 || nota3 > 40) {
    return Swal.fire("Error", "Las notas deben estar dentro de sus rangos válidos", "error");
  }

  const total = nota1 + nota2 + nota3;
  let mensaje = "";

  if (total < 60) mensaje = "Reprobado";
  else if (total < 80) mensaje = "Bueno";
  else if (total < 90) mensaje = "Muy Bueno";
  else mensaje = "Sobresaliente";

  document.getElementById("resultado").textContent = `Calificación final: ${total} - ${mensaje}`;
  Swal.fire("¡Listo!", "Cálculo realizado con éxito", "success");
}

function limpiar() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("resultado").textContent = "";
}