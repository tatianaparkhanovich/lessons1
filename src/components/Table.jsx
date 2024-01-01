import { useState } from 'react'
import "./Table.css";
import { TableHead } from "./Table/TableHead/TableHead.jsx";
import { TableBody } from "./Table/TableBody/TableBody.jsx";
import tableData1 from "../tableData.json";

export const Table = () => {
  const [tableData, setTableData] = useState(tableData1);
  const columns = [
    { lable: "Full Name", key: "full_name" },
    { lable: "Gender", key: "gender" },
    { lable: "Age", key: "age" },
    { lable: "Email", key: "email" },
  ];
  return (
    <table className="table">
      <TableHead columns={columns} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
