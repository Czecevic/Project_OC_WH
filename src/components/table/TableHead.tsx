import { FunctionComponent, useState } from "react";
import { EmployeeState, TableHeadProps } from "../../interfaces/interfaces";

export const TableHead: FunctionComponent<TableHeadProps> = ({
  columns,
  handleSorting,
}) => {
  // state
  const [sortField, setSortField] = useState<keyof EmployeeState | string>("");
  const [order, setOrder] = useState<string>("asc");

  const handleSortingChange = (sortField: keyof EmployeeState | string) => {
    const sortOfOrder =
      sortField === sortField && order === "asc" ? "desc" : "asc";
    setSortField(sortField);
    setOrder(sortOfOrder);
    handleSorting(sortField, sortOfOrder);
  };
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl =
            sortable && sortField === accessor
              ? order === "asc"
                ? "up"
                : "down"
              : "default";
          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
              className={cl}
            >
              {label}
              {cl === "up" ? (
                <span>&#8593;</span>
              ) : cl === "down" ? (
                <span>&#8595;</span>
              ) : (
                <span>&#8645;</span>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
