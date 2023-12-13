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
    departements: "sales",
    street: "",
    city: "",
    selectState: "Alabama",
    zipCode: 0,
  });
  const [saveEmployee, setSaveEmployee] = useState<string>("nothing");
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
    // date de debut
    const startDate =
      employee.startDate instanceof Date
        ? employee.startDate.toISOString()
        : null;
    // date de naissance
    const dateOfBirth =
      employee.dateBirth instanceof Date
        ? employee.dateBirth.toISOString()
        : null;
    const yearOfDateBirth = new Date(employee.dateBirth || "").getFullYear();
    if (yearOfDateBirth < 2005) {
      dispatch(
        getAddEmployee({
          ...employee,
          startDate: startDate,
          dateBirth: dateOfBirth,
        })
      );
      setSaveEmployee("addEmployee");
    } else {
      setSaveEmployee("notAddEmployee");
    }
  };

  const handleInformationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
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
          <button type="submit" onClick={() => setIsOpen(true)}>
            save
          </button>
        </form>
        {isOpen === true &&
          (saveEmployee === "addEmployee" ? (
            <div className="popupvalide">
              <button onClick={() => setIsOpen(false)}>X</button>
              <p>Employee Created!</p>
            </div>
          ) : (
            saveEmployee === "notAddEmployee" && (
              <div className="popup">
                <button onClick={() => setIsOpen(false)}>X</button>
                <p>Employee was not created, check your information</p>
              </div>
            )
          ))}
      </div>
    </div>
  );
};
