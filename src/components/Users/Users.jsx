import "./Users.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CustomLink } from "../CustomLink/CustomLink";
import { ThemeContext } from "../../context/ThemeContext";

export const Users = () => {
  const [appState, setAppState] = useState();
    const { theme, setTheme } = useContext(ThemeContext);
   const handleChange = () => {
     setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
   };

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    setAppState();
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);
  return (
    <>
      {appState && (
        <div className={`users ${theme}`}>
          <input
            type="checkbox"
            role="switch"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          {appState.map((user) => (
            <CustomLink
              path={`users/${user.id}`}
              key={user.id}
              linkText={user.name}
            />
          ))}
        </div>
      )}
    </>
  );
};
