
import { useState, useEffect } from "react";
import './App.css'
import axios from 'axios';
import  UserData  from './components/UserData/UserData'; 

function App() {
  const [appState, setAppState] = useState();
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    setAppState();
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons );
      console.log(allPersons);
    });
  }, [setAppState]);


  return (
    <div className="app">
      <UserData persons={appState} />
    </div>
  );
}

export default App
