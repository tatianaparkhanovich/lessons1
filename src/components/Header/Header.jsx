import { NavLink } from "react-router-dom";
import "./Header.css"

const setIsActive = ({ isActive }) => isActive ? "active-link" : "";
const Header = () => {
    return (
        <div>
      <div className="header">
        <NavLink to="/" className={setIsActive}>Home</NavLink>
        <NavLink to="/about" className={setIsActive}>About</NavLink>
        <NavLink to="/users" className={setIsActive}>Users</NavLink>
            </div>
           </div> 
    );
}
export default Header
