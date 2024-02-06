// css
import "../style/App.css";
import imgLogo from "../assets/logo-removebg.png";

export const Homepage: React.FC = () => {
  return (
    <div className="logoWithPage">
      <img src={imgLogo}></img>
      <ul>
        <li>
          <a href="/create-employee">Create Employee</a>
        </li>
        <li>
          <a href="/employee-list">List of Employee</a>
        </li>
      </ul>
    </div>
  );
};
