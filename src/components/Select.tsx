import { selectProps } from "../interfaces/interfaces";

export const Select: React.FunctionComponent<selectProps> = ({
  name,
  id,
  handleAdressChange,
  selectChoice,
}) => {
  return (
    <select
      name={name}
      id={id}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleAdressChange(event)
      }
    >
      {selectChoice.map(
        (selectElem: string | { name: string }, index: number) => (
          <option key={index}>
            {typeof selectElem === "string" ? selectElem : selectElem.name}
          </option>
        )
      )}
    </select>
  );
};
