import { NavLink } from "react-router-dom";
import "./Header.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const setIsActive = ({ isActive }) => isActive ? "active-link" : "";

const Header = ({ title }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChange = () => {
    setTheme((prevValue) => prevValue === "light" ? "dark" : "light");
  }
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
          <input
            type="checkbox"
            role="switch"
            checked={theme === "dark"}
            onChange={handleChange}
          />
        </div>
      </div>
    );
}
export default Header
