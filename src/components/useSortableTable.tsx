import { useState } from "react";
import { EmployeeState } from "../interfaces/interfaces";

export const useStorableTable = ({ employees }: EmployeeState) => {
  const [tableData, setTableData] = useState(employees);

  const handleSorting = (
    sortField: keyof EmployeeState["employees"][0],
    sortOrder: string
  ) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null || b[sortField] === undefined) return 1;
        if (b[sortField] === null || b[sortField] === undefined) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return { tableData, handleSorting } as const;
};
