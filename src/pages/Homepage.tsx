// css
import "../style/App.css";
import imgLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Homepage: React.FC = () => {
  return (
    <div className="logoWithPage">
      <img src={imgLogo} alt="logoImg"></img>
      <h1 className="titleLogo">Wealth Health</h1>
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
