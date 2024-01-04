import { InformationProps } from "../interfaces/interfaces";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export const Information: React.FC<InformationProps> = ({
  handleInformationChange,
  date,
  setDate,
}) => {
  const getDateBirth = (
    e: React.ChangeEvent<HTMLInputElement> | null | Date
  ) => {
    if (e instanceof Date) {
      setDate({
        ...date,
        dateBirth: new Date(e),
      });
    }
  };
  const getStartDate = (
    e: React.ChangeEvent<HTMLInputElement> | null | Date
  ) => {
    if (e instanceof Date) {
      setDate({
        ...date,
        startDate: new Date(e),
      });
    }
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
      <label id="dateBirthLabel">date of birth</label>
      <DatePicker
        onChange={(e) => getDateBirth(e as Date)}
        value={date.dateBirth}
        aria-labelledby="dateBirthLabel"
        name="dateBirthLabel"
      />
      <label id="startDateLabel">start date</label>
      <DatePicker
        onChange={(e) => getStartDate(e as Date)}
        value={date.startDate}
        aria-labelledby="startDateLabel"
        name="startDateLabel"
      />
    </>
  );
};
