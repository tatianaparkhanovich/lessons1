import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../store/userReducer";

export const Form = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(10);
  const [userName, setUserName] = useState("");
  const [userNik, setUserNik] = useState("");
  const [userEmail, setUserEmail] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressStreet, setAddressStreet] = useState("");

  const addNewUser = (e) => {
    e.preventDefault();
    setUserId((prevState) => ++prevState); 
      dispatch({
        type: ADD_USER,
        payload: {
          id: userId +1,
          name: userName,
          username: userNik,
          email: userEmail,
          address: {
            city: addressCity,
            street: addressStreet,
          },
        },
      });
    

    setUserName("");
    setUserNik("");
    setUserEmail("");
    setAddressCity("");
    setAddressStreet("");
  };

  const onCangeName = (e) => {
    setUserName(e.target.value);
  };
  const onCangeUserName = (e) => {
    setUserNik(e.target.value);
  };
  const onCangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
   const onChangeCity = (event) => {
    setAddressCity(event.target.value);
  };

  const onChangeStreet = (event) => {
    setAddressStreet(event.target.value);
  }

  return (
    <form onSubmit={addNewUser} className="main">
      <div>
        <label>
          Name <input required value={userName} onChange={onCangeName} />
        </label>
        <label>
          Niik <input required value={userNik} onChange={onCangeUserName} />
        </label>
        <label>
          Email <input required value={userEmail} onChange={onCangeEmail} />
        </label>
        <label>
          City <input required value={addressCity} onChange={onChangeCity} />
        </label>
        <label>
          Street <input required value={addressStreet} onChange={onChangeStreet} />
        </label>
      </div>
      <div type="submit">
        <button>Добавить</button>
      </div>
    </form>
  );
};
