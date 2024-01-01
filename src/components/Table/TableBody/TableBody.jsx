export const TableBody = ({ columns, tableData }) => {
  return (
    <tbody>
      {tableData.map((data) => (
        <tr key={data.id}>
          {columns.map(({ key }) => (
            <td key={key}>{data[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
