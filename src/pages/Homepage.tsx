/* eslint-disable react-hooks/rules-of-hooks */
// css
import "../style/App.css";
// react
import { Link } from "react-router-dom";
import { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { getAddEmployee } from "../store/Employee.stores";
// components
import { Information } from "../components/Information";
import { Adress } from "../components/Adress";
import { EmployeeState } from "../interfaces/interfaces";

export const Homepage: React.FC = () => {
  // state
  const [employee, setEmployee] = useState<EmployeeState>({
    firstName: "",
    lastName: "",
    dateBirth: "",
    startDate: "",
    departements: "",
    street: "",
    city: "",
    selectState: "",
    zipCode: 0,
  });

  // const
  const dispatch = useDispatch();
  const allDepartement = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateOfBirth =
      employee.dateBirth instanceof Date
        ? employee.dateBirth.toISOString()
        : null;
    const yearOfDateBirth = new Date(employee.dateBirth || "").getFullYear();
    if (yearOfDateBirth < 2005) {
      dispatch(getAddEmployee({ ...employee, dateBirth: dateOfBirth }));
      console.log(typeof dateOfBirth);
      alert("vous avez rajouter un utilisateur");
    } else {
      alert("vous devez avoir 18 ans minimum");
    }
  };

  const handleInformationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id, value);
    setEmployee((prevEmployee) => ({ ...prevEmployee, [id]: value }));
  };

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={"/employee-list"}>View current employees</Link>
        <h2>Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          className="create-employee"
          onSubmit={(e) => addEmployee(e)}
        >
          <Information
            handleInformationChange={handleInformationChange}
            employee={employee}
            setEmployee={setEmployee}
          />
          <Adress
            handleAdressChange={handleAdressChange}
            employee={employee}
            allDepartement={allDepartement}
          />
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
};
