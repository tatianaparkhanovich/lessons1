import { NavLink } from "react-router-dom";
import "./Header.css"


const setIsActive = ({ isActive }) => isActive ? "active-link" : "";

const Header = ({ title }) => {
    return (
      <div>
        <div className="header">
          <h1>{title}</h1>
          <NavLink to="/" className={setIsActive}>
            Home
          </NavLink>
          <NavLink to="/about" className={setIsActive}>
            About
          </NavLink>
          <NavLink to="/users" className={setIsActive}>
            Users
          </NavLink>
        </div>
      </div>
    );
}
export default Header
