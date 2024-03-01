// css
import "../style/App.css";
import imgLogo from "../assets/logo-removebg.png";
import { Link } from "react-router-dom";

export const Homepage: React.FC = () => {
  return (
    <div className="logoWithPage">
      <img src={imgLogo}></img>
      <ul>
        <li>
          <Link to="/create-employee">Create Employee</Link>
        </li>
        <li>
          <Link to="/employee-list">List of Employee</Link>
        </li>
      </ul>
    </div>
  );
};
