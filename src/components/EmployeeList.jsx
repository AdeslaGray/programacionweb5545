export function EmployeeList({ employees }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">👥 Listado de empleados</h2>
      <div className="grid gap-4">
        {Array.isArray(employees) && employees.map((emp) => (
          <div key={emp.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p><strong>Nombre:</strong> {emp.nombre}</p>
            <p><strong>DNI:</strong> {emp.dni}</p>
            <p><strong>Dirección:</strong> {emp.direccion}</p>
            <p><strong>Email:</strong> {emp.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}