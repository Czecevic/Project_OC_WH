import { FunctionComponent, useState } from "react";
import { TableHeadProps } from "../interfaces/interfaces";

export const TableHead: FunctionComponent<TableHeadProps> = ({
  columns,
  handleSorting,
}) => {
  // state
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");

  const handleSortingChange = (accessor: string) => {
    const sortOfOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOfOrder);
    handleSorting(accessor, sortOfOrder);
  };
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
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
