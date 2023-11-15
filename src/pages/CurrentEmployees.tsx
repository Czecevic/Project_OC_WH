import { useSelector } from "react-redux";
import { selectEmployee } from "../store/Employee.stores";
import { Link } from "react-router-dom";
import { Table } from "../components/Table";

export const CurrentEmployees = () => {
  const employees = useSelector(selectEmployee);
  return (
    <div>
      <Table employees={employees} />
      <div>
        <p>Showing {employees.length} entries</p>
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
