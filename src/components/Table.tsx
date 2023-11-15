import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TableProps } from "../interfaces/interfaces";
import { useStorableTable } from "./useSortableTable";
import { columns } from "../data/Columns";
import { useState } from "react";

export const Table: React.FunctionComponent<TableProps> = ({ employees }) => {
  const [tableData, handleSorting] = useStorableTable({
    employees: employees,
    columns,
  });
  const [selectEntries, setSelectEntries] = useState<number>(10);

  const searchElement = (e: string) => {
    const resultSearch = e.toLowerCase();
    if (resultSearch.length > 2) {
      tableData.forEach((element: string) => {
        const info = Object.values(element);
        // console.log(info.includes(resultSearch), info, e);
      });
    }
  };

  return (
    <>
      <div className="searchBar_ShowEntries">
        <div className="ShowEntries">
          <p>Show</p>
          <select
            id="select_entries"
            onChange={(e) => setSelectEntries(parseInt(e.target.value))}
          >
            <option>10</option>
            <option>25</option>
          </select>
          <p>entries</p>
        </div>
        <div className="SearchBar">
          <label>Search</label>
          <input onChange={(e) => searchElement(e.target.value)} />
        </div>
      </div>
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody
          columns={columns}
          tableData={tableData}
          selectEntries={selectEntries}
        />
      </table>
    </>
  );
};
