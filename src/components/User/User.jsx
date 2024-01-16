import "./User.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      const nowUser = allPersons.find((el) => el.id == id);
      setUser(nowUser);
    });
  }, [id]);

  return (
    <div>
      {user && (
        <div className="user">
          <h4>{user.id}</h4>
          <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        </div>
      )}
    </div>
  );
}
