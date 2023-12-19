interface selectProps {
  name: string;
  id: string;
  handleAdressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectChoice: (string | { name: string })[];
}

export const Select: React.FunctionComponent<selectProps> = ({
  name,
  id,
  handleAdressChange,
  selectChoice,
}) => {
  return (
    <select name={name} id={id} onClick={(e) => handleAdressChange(e)}>
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
