import { useEmployees } from "./hooks/useEmployees.jsx";
import { EmployeeForm } from "./components/EmployeeForm.jsx";
import { EmployeeList } from "./components/EmployeeList.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { employees, addEmployee } = useEmployees();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <EmployeeForm onAdd={addEmployee} />
        <EmployeeList employees={employees} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;