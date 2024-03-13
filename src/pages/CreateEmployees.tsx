// css
import "../style/App.css";
// react
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { getAddEmployee } from "../store/Employee.stores";
// components
import { Information } from "../components/HomePage/Information";
import { Adress } from "../components/HomePage/Adress";
import { EmployeeState } from "../interfaces/interfaces";

// modal externe
import { UseModal } from "react_modal_openclassrooms";

export const CreateEmployee: React.FC = () => {
  // state
  const [date, setDate] = useState({
    dateBirth: new Date(),
    startDate: new Date(),
  });

  // useRef
  const employeeRef = useRef<EmployeeState>({
    firstName: "",
    lastName: "",
    dateBirth: date.dateBirth,
    startDate: date.startDate,
    departements: "sales",
    street: "",
    city: "",
    selectState: "Alabama",
    zipCode: 0,
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);

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
      date.startDate instanceof Date ? date.startDate.toISOString() : null;
    // date de naissance
    const dateOfBirth =
      date.dateBirth instanceof Date ? date.dateBirth.toISOString() : null;
    const yearOfDateBirth = new Date(date.dateBirth || "").getFullYear();
    if (
      yearOfDateBirth < 2005 &&
      employeeRef.current.firstName.length > 2 &&
      employeeRef.current.lastName.length > 2 &&
      employeeRef.current.street.length > 2 &&
      employeeRef.current.city.length > 2 &&
      employeeRef.current.zipCode != 0
    ) {
      dispatch(
        getAddEmployee({
          ...employeeRef.current,
          startDate: startDate,
          dateBirth: dateOfBirth,
        })
      );
      setValid(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setValid(false);
    }
  };

  const handleInformationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    employeeRef.current = { ...employeeRef.current, [id]: value };
  };

  const handleAdressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    employeeRef.current = { ...employeeRef.current, [name]: value };
  };

  const handleAdressSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
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
          tabIndex={0}
          onSubmit={(e) => addEmployee(e)}
        >
          <Information
            handleInformationChange={handleInformationChange}
            date={date}
            setDate={setDate}
          />
          <Adress
            handleAdressInputChange={handleAdressInputChange}
            handleAdressSelectChange={handleAdressSelectChange}
            allDepartement={allDepartement}
          />
          <button
            type="submit"
            className="saveButton"
            name="saveButton"
            onClick={() => setIsOpen(!isOpen)}
          >
            save
          </button>
        </form>
        <UseModal
          employee={employeeRef}
          submitButton={isOpen}
          setSubmitButton={setIsOpen}
          messageValid={"Employee added successfully"}
          messageError={"Failed to add employee"}
          validCondition={valid}
        />
      </div>
    </div>
  );
};
