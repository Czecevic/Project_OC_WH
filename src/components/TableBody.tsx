import { EmployeeState, TableBodyProps } from "../interfaces/interfaces";
import { useEffect } from "react";

export const TableBody: React.FunctionComponent<TableBodyProps> = ({
  columns,
  tableData,
  selectEntries,
  searchElement,
  setSearchElement,
}) => {
  useEffect(() => {
    if (searchElement.length == tableData.length) {
      setSearchElement(tableData);
    }
  });

  return (
    <tbody>
      {searchElement.map(
        (data: EmployeeState["employees"][0], index: number) => {
          if (index < selectEntries) {
            return (
              <tr key={index}>
                {columns.map(({ accessor }) => {
                  if (searchElement.length < selectEntries) {
                    return (
                      <td key={accessor}>
                        {accessor === "startDate" || accessor === "dateBirth"
                          ? data[accessor].split("T")[0]
                          : data[accessor]}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          }
        }
      )}
    </tbody>
  );
};
