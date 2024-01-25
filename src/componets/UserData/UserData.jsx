import { useSelector } from "react-redux";
import "./User.Data.css"
import { Person } from "../Person";

const UserData=() => {
  const persons = useSelector((state) => state.users.users); 
  
    if (!persons || persons.length === 0) return <p>нет данных.</p>
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <Person person={person} key={person.id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserData;