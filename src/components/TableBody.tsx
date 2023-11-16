import { EmployeeState, TableBodyProps } from "../interfaces/interfaces";

export const TableBody: React.FunctionComponent<TableBodyProps> = ({
  columns,
  selectEntries,
  searchElement,
}) => {
  console.log(searchElement);
  return (
    <tbody>
      {searchElement.map(
        (data: EmployeeState["employees"][0], index: number) => (
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
        )
      )}
    </tbody>
  );
};
