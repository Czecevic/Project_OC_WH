import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { useStorableTable } from "./useSortableTable";
import { EmployeeState } from "../../interfaces/interfaces";
import { columns } from "../../data/Columns";
import { useState } from "react";

export const Table = ({ employees }: { employees: EmployeeState[] }) => {
  // const
  const { tableData, handleSorting } = useStorableTable(employees);
  const [searchElement, setSearchElement] =
    useState<EmployeeState[]>(tableData);
  const [selectEntries, setSelectEntries] = useState<number>(10);

  // function search
  const search = (e: string) => {
    const resultSearch = e.toLowerCase();
    if (resultSearch.length > 2) {
      const filterEmployee = tableData.filter((info) =>
        Object.values(info).join("").toLowerCase().includes(resultSearch)
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
          <label htmlFor="search" id="search">
            Search
          </label>
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
