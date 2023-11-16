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
  const [searchElement, setSearchElement] = useState<string[]>(tableData);
  const [selectEntries, setSelectEntries] = useState<number>(10);
  const search = (e: string) => {
    const resultSearch = e.toLowerCase();
    if (resultSearch.length > 2) {
      const filterEmployee = tableData.filter((info) =>
        Object.values(info).some(
          (val) => typeof val === "string" && val.includes(e)
        )
      );
      setSearchElement(filterEmployee);
    } else {
      setSearchElement(tableData);
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
          <input onChange={(e) => search(e.target.value)} />
        </div>
      </div>
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody
          columns={columns}
          tableData={tableData}
          selectEntries={selectEntries}
          searchElement={searchElement}
          setSearchElement={setSearchElement}
        />
      </table>
    </>
  );
};
