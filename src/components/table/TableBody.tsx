import { EmployeeState, TableBodyProps } from "../../interfaces/interfaces";
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
  }, [searchElement, tableData, setSearchElement]);

  return (
    <tbody>
      {searchElement.map((data: EmployeeState, index: number) => {
        if (index < selectEntries) {
          return (
            <tr key={index}>
              {columns.map(({ accessor }) => {
                const nameColumn = data[
                  accessor as keyof EmployeeState
                ] as string;
                return (
                  <td key={accessor}>
                    {accessor === "startDate" || accessor === "dateBirth"
                      ? nameColumn.split("T")[0]
                      : nameColumn}
                  </td>
                );
              })}
            </tr>
          );
        }
        return null;
      })}
    </tbody>
  );
};
