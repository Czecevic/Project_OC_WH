import { InformationProps } from "../interfaces/interfaces";

export const Information: React.FC<InformationProps> = ({
  handleInformationChange,
  employee,
  setEmployee,
}) => {
  // console.log(handleInformationChange, employee);
  const getDateBirth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmployee({
      ...employee,
      dateBirth: new Date(e.target.value),
    });
  };
  const getStartDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmployee({
      ...employee,
      startDate: new Date(e.target.value),
    });
  };
  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={(e) => handleInformationChange(e)}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={(e) => handleInformationChange(e)}
      ></input>
      <label htmlFor="dateBirth">date of birth</label>
      <input
        type="date"
        id="dateBirth"
        onChange={(e) => getDateBirth(e)}
      ></input>
      <label htmlFor="startDate">start date</label>
      <input
        type="date"
        id="startDate"
        onChange={(e) => getStartDate(e)}
      ></input>
    </>
  );
};
