import "./Users.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { CustomLink } from "../CustomLink/CustomLink";

export const Users = () => {
  const [appState, setAppState] = useState();

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
        <div>
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
