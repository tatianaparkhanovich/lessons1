import "./Users.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CustomLink } from "../CustomLink/CustomLink";
import { ThemeContext } from "../../context/ThemeContext";

export const Users = () => {
  const [appState, setAppState] = useState();
  const{theme}= useContext(ThemeContext)

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
