import { InformationProps } from "../interfaces/interfaces";

export const Information: React.FC<InformationProps> = ({
  setFirstName,
  setLastName,
  setDateBirth,
  setStartDate,
}) => {
  const getDateBirth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDateBirth(new Date(e.target.value));
  };
  const getStartDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStartDate(new Date(e.target.value));
  };
  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={(e) => setLastName(e.target.value)}
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
