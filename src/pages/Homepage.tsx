/* eslint-disable react-hooks/rules-of-hooks */
// css
import "../style/App.css";
// react
import { Link } from "react-router-dom";
import { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getAddEmployee } from "../store/Employee.stores";
import { selectEmployee } from "../store/Employee.stores";
// components
import { Information } from "../components/Information";
import { Adress } from "../components/Adress";

export const Homepage = () => {
  // state
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [dateBirth, setDateBirth] = useState<Date>();
  const [startDate, setStartDate] = useState<Date>();
  const [departements, setDepartements] = useState<string>("Sales");
  const [street, setStreet] = useState<string>();
  const [city, setCity] = useState<string>();
  const [selectState, setSelectState] = useState<string>("Alabama");

  // const
  const dispatch = useDispatch();
  const employee = useSelector(selectEmployee);
  const allDepartement = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedEmployee = {
      firstName,
      lastName,
      dateBirth: dateBirth?.toISOString() || "",
      startDate: startDate?.toISOString() || "",
      departements,
      street,
      city,
      selectState,
    };
    dispatch(getAddEmployee(storedEmployee));
    alert("vous avez rajouter un utilisateur");
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
            setFirstName={setFirstName}
            setLastName={setLastName}
            setDateBirth={setDateBirth}
            setStartDate={setStartDate}
          />
          <Adress
            setStreet={setStreet}
            setCity={setCity}
            setSelectState={setSelectState}
            allDepartement={allDepartement}
            setDepartements={setDepartements}
          />
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
};
