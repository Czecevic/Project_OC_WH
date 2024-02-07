interface addEmployeeProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  saveEmployee: string;
}

export const AddEmployee: React.FunctionComponent<addEmployeeProps> = ({
  isOpen,
  setIsOpen,
  saveEmployee,
}) => {
  return (
    <div>
      {isOpen === true &&
        (saveEmployee === "addEmployee" ? (
          <div className="popupvalide">
            <button name="popupvalide" onClick={() => setIsOpen(false)}>
              X
            </button>
            <p>Employee Created!</p>
          </div>
        ) : (
          saveEmployee === "notAddEmployee" && (
            <div className="popup">
              <button name="popup" onClick={() => setIsOpen(false)}>
                X
              </button>
              <p>Employee was not created, check your information</p>
            </div>
          )
        ))}
    </div>
  );
};
