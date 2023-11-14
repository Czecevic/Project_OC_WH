import { useSelector } from "react-redux";
import { selectEmployee } from "../store/Employee.stores";
import { Link } from "react-router-dom";

export const CurrentEmployees = () => {
  const employees = useSelector(selectEmployee);
  return (
    <div>
      <Link to={"/"}>test</Link>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>StartDate</th>
            <th>Departement</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        {employees.length != 0 && (
          <tbody>
            {employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.dateBirth}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.departements}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.selectState}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};
