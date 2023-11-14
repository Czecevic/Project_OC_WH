import { ReactNode } from "react";

export interface EmployeeState {
  employees: Array<{
    firstName: string | undefined;
    lastName: string | undefined;
    dateBirth: ReactNode;
    startDate: ReactNode;
    departements: string | undefined;
    street: string | undefined;
    city: string | undefined;
    selectState: string | undefined;
  }>;
}

export interface AdressProps {
  setStreet: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCity: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
  allDepartement: string[];
  setDepartements: React.Dispatch<React.SetStateAction<string>>;
}

export interface InformationProps {
  setFirstName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLastName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDateBirth: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
