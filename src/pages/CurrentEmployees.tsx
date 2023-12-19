import { useSelector } from "react-redux";
import { selectEmployee } from "../store/Employee.stores";
import { Link } from "react-router-dom";
import { Table } from "../components/table/Table";
import { employeeMock } from "../data/mock/mock";
export const CurrentEmployees = () => {
  const employees = useSelector(selectEmployee);
  return (
    <div>
      <Table employees={employees.length > 0 ? employees : employeeMock} />
      <div>
        <p>
          Showing{" "}
          {employees.length > 0 ? employees.length : employeeMock.length}{" "}
          entries
        </p>
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
