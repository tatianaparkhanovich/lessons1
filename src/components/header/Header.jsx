import logo from "../../logo.svg";
import "./Header.css";

export const Header = (props) => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <nav>
          <ul className="Ul">
            <li>O нас</li>
            <li>Продукт</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
