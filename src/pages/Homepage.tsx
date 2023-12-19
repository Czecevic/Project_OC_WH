/* eslint-disable react-hooks/rules-of-hooks */
// css
import "../style/App.css";
// react
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { getAddEmployee } from "../store/Employee.stores";
// components
import { Information } from "../components/Information";
import { Adress } from "../components/Adress";
import { EmployeeState } from "../interfaces/interfaces";

export const Homepage: React.FC = () => {
  // state
  // const [employee, setEmployee] = useState<EmployeeState>({
  //   firstName: "",
  //   lastName: "",
  //   dateBirth: "",
  //   startDate: "",
  //   departements: "sales",
  //   street: "",
  //   city: "",
  //   selectState: "Alabama",
  //   zipCode: 0,
  // });

  // useRef
  const employeeRef = useRef<EmployeeState>({
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
      employeeRef.current.startDate instanceof Date
        ? employeeRef.current.startDate.toISOString()
        : null;
    console.log(startDate);
    // date de naissance
    const dateOfBirth =
      employeeRef.current.dateBirth instanceof Date
        ? employeeRef.current.dateBirth.toISOString()
        : null;
    const yearOfDateBirth = new Date(
      employeeRef.current.dateBirth || ""
    ).getFullYear();
    if (
      yearOfDateBirth < 2005 &&
      employeeRef.current.firstName.length > 2 &&
      employeeRef.current.lastName.length > 2 &&
      employeeRef.current.street.length > 2 &&
      employeeRef.current.city.length > 2 &&
      !employeeRef.current.startDate &&
      !employeeRef.current.zipCode
    ) {
      dispatch(
        getAddEmployee({
          ...employeeRef.current,
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
    // setEmployee((prevEmployee) => ({ ...prevEmployee, [id]: value }));
    employeeRef.current = { ...employeeRef.current, [id]: value };
  };

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
    employeeRef.current = { ...employeeRef.current, [name]: value };
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
            employeeRef={employeeRef.current}
            // setEmployee={setEmployee}
          />
          <Adress
            handleAdressChange={handleAdressChange}
            allDepartement={allDepartement}
          />
          <button
            type="submit"
            className="saveButton"
            onClick={() => setIsOpen(true)}
          >
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
