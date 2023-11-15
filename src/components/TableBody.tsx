import { EmployeeState, TableBodyProps } from "../interfaces/interfaces";

export const TableBody: React.FunctionComponent<TableBodyProps> = ({
  columns,
  tableData,
  selectEntries,
}) => {
  return (
    <tbody>
      {tableData.map((data: EmployeeState["employees"][0], index: number) => (
        <tr key={index}>
          {columns.map(({ accessor }) => {
            if (tableData.length < selectEntries) {
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
      ))}
    </tbody>
  );
};
