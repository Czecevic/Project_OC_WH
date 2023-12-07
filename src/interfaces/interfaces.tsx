interface Column {
  label: string;
  accessor: string;
  sortable: boolean;
  sortByOrder: string;
}

export interface TableBodyProps {
  columns: Column[];
  tableData: EmployeeState;
  selectEntries: number;
  searchElement: EmployeeState;
  setSearchElement: React.Dispatch<React.SetStateAction<EmployeeState>>;
}

export interface TableHeadProps {
  columns: Column[];
  handleSorting: (sortField: keyof EmployeeState, sortOrder: string) => void;
}

export interface EmployeeState {
  firstName: string;
  lastName: string;
  dateBirth: string | Date;
  startDate: string | Date;
  departements: string;
  street: string;
  city: string;
  selectState: string;
  zipCode: number;
}

export interface AdressProps {
  handleAdressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  employee: EmployeeState;
  setemployee: React.Dispatch<React.SetStateAction<EmployeeState>>;
  allDepartement: string[];
}

export interface InformationProps {
  handleInformationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  employee: EmployeeState;
  setEmployee: React.Dispatch<React.SetStateAction<EmployeeState>>;
}
