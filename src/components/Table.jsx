import "./Table.css";
import { TableHead } from "./Table/TableHead/TableHead.jsx";
import { TableBody } from "./Table/TableBody/TableBody.jsx";
import { useSortableTable } from "../../src/useSortableTable.js";

export const Table = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns );
 
  return (
    <table className="table">
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
