import './App.css';
import UserData from "./componets/UserData/UserData";
import { useDispatch, useSelector } from "react-redux";
import { Form } from './componets/Form';
import { setUsers } from './actions/users/userActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUsers())
  }, []);
  
  if (error) {
    return (
      <div className="app">
        <h1>Произошла ошибка запроса!</h1>
       </div>
    )
  }
  return (
    <div className="app">
      <Form />
      {loading ? <h1>Подождите, данные загружаються</h1> : <UserData />}
    </div>
  );
}

export default App;
