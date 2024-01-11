import "./User.Data.css"

function UserData(props) {
    const { persons } = props
    if (!persons || persons.length === 0) return <p>нет данных.</p>

return (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>adress</th>
      </tr>
    </thead>
    <tbody>
      {persons.map((person) => (
        <tr key={person.id}>
          <td>{person.id || "нет данных"}</td>
          <td>{person.name || "нет данных"}</td>
          <td>{person.username || "нет данных"}</td>
          <td>{person.email || "нет данных"}</td>
          <td>{person.address.city|| "нет данных"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
}
export default UserData;