import { useDispatch } from "react-redux";
import { DELETE_USER } from "../store/userReducer";

export const Person = ({ person, index }) => {
    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
      dispatch({ type: DELETE_USER, payload: id});
    }
    return (
      <tr key={person.id}>
        <td>{index + 1}</td>
        <td>{person.name}</td>
        <td>{person.username}</td>
        <td>{person.email}</td>
        <td>{`${person.address.city}, ${person.address.street}`}</td>
        <td>
          <button onClick={() => handleDeleteUser(person.id)}>X</button>
        </td>
      </tr>
    );
}