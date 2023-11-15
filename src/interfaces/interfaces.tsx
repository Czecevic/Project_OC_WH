interface Column {
  label: string;
  accessor: string;
  sortable: boolean;
  sortByOrder: string;
}

export interface TableBodyProps {
  columns: Column[];
  tableData: EmployeeState["employees"];
  selectEntries: number;
}

export interface TableHeadProps {
  columns: Column[];
  handleSorting: (accessor: string, sortOrder: string) => void;
}

export interface TableProps {
  employees: EmployeeState["employees"];
  columns: Column[];
}

export interface EmployeeState {
  employees: Array<{
    firstName: string;
    lastName: string;
    dateBirth: string;
    startDate: string;
    departements: string;
    street: string;
    city: string;
    selectState: string;
    zipCode: number;
  }>;
}

export interface AdressProps {
  setStreet: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCity: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
  allDepartement: string[];
  setDepartements: React.Dispatch<React.SetStateAction<string>>;
  setZipCode: React.Dispatch<React.SetStateAction<number>>;
}

export interface InformationProps {
  setFirstName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLastName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDateBirth: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
