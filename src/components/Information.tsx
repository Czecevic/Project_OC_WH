import { InformationProps } from "../interfaces/interfaces";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";

export const Information: React.FC<InformationProps> = ({
  handleInformationChange,
  employeeRef,
}) => {
  useEffect(() => {
    console.log(employeeRef.dateBirth);
  });
  const getDateBirth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e instanceof Date) {
      employeeRef.dateBirth = new Date(e);
    }
  };
  const getStartDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e instanceof Date) {
      employeeRef.startDate = new Date(e);
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
      <label htmlFor="dateBirth">date of birth</label>
      <DatePicker
        onChange={(e) => getDateBirth(e)}
        value={employeeRef.dateBirth}
      />
      <label htmlFor="startDate">start date</label>
      <DatePicker
        onChange={(e) => getStartDate(e)}
        value={employeeRef.startDate}
      />
    </>
  );
};
