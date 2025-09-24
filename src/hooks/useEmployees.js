import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

export function useEmployees() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API);
      setEmployees(res.data);
    } catch (error) {
      console.error("Error al cargar empleados:", error);
    }
  };

  const addEmployee = async (data) => {
    try {
      await axios.post(API, data);
      fetchEmployees();
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, addEmployee };
}