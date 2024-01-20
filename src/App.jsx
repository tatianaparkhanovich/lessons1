import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import UserData from "./componets/UserData/UserData";
import { useDispatch } from "react-redux";
import { SET_USERS } from "./store/userReducer";
import { Form } from './componets/Form';

function App() {
  const dispatch = useDispatch();

  const [appState, setAppState] = useState(false);

  useEffect(() => {
  setAppState(true);
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    console.log(allPersons);
    setAppState(false);
    dispatch({type: SET_USERS, payload: allPersons})
  });
  }, []);
  
  return ( 
    <div className='app'>
      <Form />
      {appState ? (
        <h1>Подождите, данные загружаються</h1>
      ) : (
          <UserData/>
      )}
      </div>
  )
}

export default App;
