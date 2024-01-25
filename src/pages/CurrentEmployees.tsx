import { useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployee } from "../store/Employee.stores";
import { Link } from "react-router-dom";
import { Table } from "../components/Table/Table";
import { employeeMock } from "../data/mock/mock";
export const CurrentEmployees = () => {
  const employees = useSelector(selectEmployee);
  const [selectEntries, setSelectEntries] = useState<number>(10);

  // show all employees
  const showEntries =
    employees.length <= 0 ? employeeMock.length : employees.length;

  return (
    <div>
      <Table
        employees={employees.length > 0 ? employees : employeeMock}
        selectEntries={selectEntries}
        setSelectEntries={setSelectEntries}
      />
      <div>
        <p>
          Showing {selectEntries > showEntries ? showEntries : selectEntries}{" "}
          {""}
          entries
        </p>
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
