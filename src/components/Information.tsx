import { useState } from "react";
import { InformationProps } from "../interfaces/interfaces";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Information: React.FC<InformationProps> = ({
  handleInformationChange,
  employee,
  setEmployee,
}) => {
  // console.log(handleInformationChange, employee);
  // const [valueBirth, onChangeBirth] = useState<Value>(new Date());
  // const [valueDateEnter, onChangeEnter] = useState<Value>(new Date());
  const getDateBirth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmployee({
      ...employee,
      dateBirth: new Date(e),
    });
  };
  const getStartDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmployee({
      ...employee,
      startDate: new Date(e),
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
      {/* <label htmlFor="dateBirth">date of birth</label>
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
      ></input> */}
      <label htmlFor="dateBirth">date of birth</label>
      <DatePicker
        onChange={(e) => getDateBirth(e)}
        value={employee.dateBirth}
      />
      <label htmlFor="startDate">start date</label>
      <DatePicker
        onChange={(e) => getStartDate(e)}
        value={employee.startDate}
      />
    </>
  );
};
