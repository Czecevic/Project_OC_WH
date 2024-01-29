import { useState } from "react";
import { EmployeeState } from "../../interfaces/interfaces";

export const useStorableTable = (employees: EmployeeState[]) => {
  const [tableData, setTableData] = useState(employees);

  const handleSorting = (
    sortField: keyof EmployeeState | string,
    sortOrder: string
  ) => {
    // console.log(employees);
    if (sortField) {
      const sorted = [...tableData].sort(
        (a: EmployeeState, b: EmployeeState) => {
          const valueA = a[sortField as keyof EmployeeState];
          const valueB = b[sortField as keyof EmployeeState];

          if (valueA == null || valueB == null) return 0;
          return (
            valueA.toString().localeCompare(valueB.toString(), "en", {
              numeric: true,
            }) * (sortOrder === "asc" ? 1 : -1)
          );
        }
      );
      setTableData(sorted);
    }
  };

  return { tableData, handleSorting } as const;
};
